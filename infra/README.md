# AWS Infrastructure with Pulumi

This Pulumi script provisions an AWS infrastructure that includes:

- An EC2 instance running Ubuntu 24.04
- A security group allowing HTTP, HTTPS, and port 8080 traffic
- A Load Balancer to distribute traffic
- A Target Group for managing backend instance health checks
- Automatic attachment of the EC2 instance to the Target Group

## Running pulumi prerequisites

Ensure you have the following installed:

- [Pulumi CLI](https://www.pulumi.com/docs/install/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) (configured with credentials)
- [Python](https://www.python.org/downloads/) and `pip`
- Required Pulumi packages (`pulumi` and `pulumi-aws`)

## Infra prerequisites
- Issue AWS SSL certificate using AWS certificate manager
- Add your subdomain to aws hosted zone in Route 53

## Resources Created
- EC2 Instance: Ubuntu 24.04 with t3.medium instance type.
- Security Group: Allows traffic on ports 80, 443, and 8080.
- Elastic Load Balancer (ELB): Routes HTTP traffic.
- Target Group: Monitors the health of backend instances.
- Instance Attachment: Automatically connects the EC2 instance to the Target Group.

```sh
     Type                              Name                             Plan
 +   pulumi:pulumi:Stack               orbit-orbit                      create
 +   ├─ aws:ec2:Vpc                    orbit-infra-vpc                  create
 +   ├─ aws:ec2:Subnet                 orbit-infra-subnet-1             create
 +   ├─ aws:ec2:Subnet                 orbit-infra-subnet-2             create
 +   ├─ aws:ec2:SecurityGroup          orbit-infra-web-sg               create
 +   ├─ aws:ec2:RouteTable             orbit-infra-route-table          create
 +   ├─ aws:ec2:InternetGateway        orbit-infra-igw                  create
 +   ├─ aws:lb:TargetGroup             orbit-infra-stats-tg             create
 +   ├─ aws:lb:TargetGroup             orbit-infra-web-tg               create
 +   ├─ aws:lb:TargetGroup             orbit-infra-nitro-tg             create
 +   ├─ aws:lb:LoadBalancer            orbit-infra-app-lb               create
 +   ├─ aws:lb:TargetGroupAttachment   orbit-infra-stats-tg-attachment  create
 +   ├─ aws:ec2:Instance               orbit-infra-ec2                  create
 +   ├─ aws:ec2:RouteTableAssociation  orbit-infra-rta-subnet-1         create
 +   ├─ aws:lb:Listener                orbit-infra-http-listener        create
 +   ├─ aws:ec2:RouteTableAssociation  orbit-infra-rta-subnet-2         create
 +   ├─ aws:route53:Record             orbit-infra-cname-record         create
 +   ├─ aws:lb:Listener                orbit-infra-https-listener       create
 +   ├─ aws:lb:Listener                orbit-infra-stats-lb-listener    create
 +   ├─ aws:lb:Listener                orbit-infra-nitro-lb-listener    create
 +   ├─ aws:lb:TargetGroupAttachment   orbit-infra-nitro-tg-attachment  create
 +   └─ aws:lb:TargetGroupAttachment   orbit-infra-web-tg-attachment    create

 + 22 to create
```

## Outputs

- **APP URL**: Public URL for accessing the app
