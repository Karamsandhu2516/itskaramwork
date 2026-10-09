import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "AWS Cloud Engineer",
    company: "Gatestone",
    region: "Canada | Oct 2023 – Jun 2026",
    description:
      "Designed, deployed, and managed AWS cloud infrastructure using services including EC2, S3, VPC, IAM, EBS, RDS, Lambda, and Elastic Load Balancing. Automated infrastructure provisioning and configuration management using Terraform and AWS CloudFormation. Developed and maintained CI/CD pipelines using Jenkins, AWS CodePipeline, CodeBuild, and CodeDeploy. Managed AWS networking and security configurations. Supported containerized workloads using Docker and Kubernetes (Amazon EKS). Implemented monitoring and observability solutions using CloudWatch, CloudTrail, Prometheus, and Grafana. Performed production support, incident management, troubleshooting, and root cause analysis (RCA). Implemented AWS security and governance practices using IAM, KMS, Secrets Manager, GuardDuty, Security Hub, and AWS Config. Developed Python and Bash automation scripts. Optimized cloud resources through cost analysis, right-sizing, Auto Scaling, and resource utilization improvements.",
    technologies: [
      "AWS",
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "Terraform",
      "CloudFormation",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "EKS",
      "CloudWatch",
      "Python",
      "Bash"
    ],
  },
];

export type WorkItem = (typeof work)[number];

