#!/bin/bash

# Read sequencerInbox address from the orbitSetupScriptConfig JSON file
SEQUENCER_INBOX_ADDRESS=$(jq -r '.sequencerInbox' /home/user/.arbitrum/orbitSetupScriptConfig.json)

# Read the parent-chain-node-url from the nodeConfig JSON file
PARENT_CHAIN_NODE_URL=$(jq -r '.node."data-availability"."parent-chain-node-url"' /home/user/.arbitrum/nodeConfig.json)

# Check if the "data-availability" key exists
if jq -e '.node | has("data-availability")' /home/user/.arbitrum/nodeConfig.json >/dev/null; then
    # Start daserver with the new command
    # Main DAS instance hardcoded for now, read the exact port from the docker-compose file
    # REST port explicitly set as its not default value due to collision with the main DAS instance
    /usr/local/bin/daserver \
     --data-availability.parent-chain-node-url "$PARENT_CHAIN_NODE_URL" \
     --data-availability.sequencer-inbox-address $SEQUENCER_INBOX_ADDRESS \
     --enable-rest \
     --rest-addr '0.0.0.0' \
     --rest-port 9878 \
     --log-level 3 \
     --data-availability.local-cache.enable \
     --data-availability.rest-aggregator.enable \
     --data-availability.rest-aggregator.urls "http://main-das-server:9877" \
     --data-availability.rest-aggregator.sync-to-storage.eager \
     --data-availability.rest-aggregator.sync-to-storage.eager-lower-bound-block "119728892" \
     --data-availability.rest-aggregator.sync-to-storage.state-dir /home/user/data/syncState \
     --data-availability.local-file-storage.enable \
     --data-availability.local-file-storage.data-dir /home/user/das-data \
     --data-availability.key.key-dir /home/user/.arbitrum/keys
else
    # Log a message and exit if "data-availability" key doesn't exist
    echo "You're running in Rollup mode. No need for das-server, so exiting the container ..."
    exit
fi
