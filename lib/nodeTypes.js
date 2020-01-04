import { clientIcon, serverIcon } from './icons/genericIcons';

import {
    databaseIcon,
    mySqlIcon,
    oracleIcon,
    postgresSqlIcon,
    elasticSearchIcon,
} from './icons/databaseIcons';

import {
    ec2Icon,
    rdsIcon,
    elbIcon,
    s3Icon,
    dynamoDbIcon,
    redShiftIcon,
    cloudWatchIcon,
    elasticCacheIcon,
    iamIcon,
    simpleDbIcon,
    swfIcon,
    cloudFrontIcon,
    sqsIcon,
    snsIcon,
    route53Icon,
    storageGatewayIcon,
    cloudFormationIcon,
    cloudSearchIcon,
    glacierIcon,
    elasticBeanstalkIcon,
    ebsIcon,
    lambdaIcon,
    apiGatewayIcon,
} from './icons/awsIcons';

const nodeTypes = [
    /**
     * Generic
     */
    {
        name: 'Client',
        label: 'Client',
        image: clientIcon,
        count: 1,
    },

    {
        name: 'Server',
        label: 'Server',
        image: serverIcon,
        count: 1,
    },
    {
        name: 'ServerCluster',
        label: 'Server',
        image: serverIcon,
        count: 2,
    },

    {
        name: 'Database',
        label: 'Database',
        image: databaseIcon,
        count: 1,
    },
    {
        name: 'DatabaseCluster',
        label: 'Database',
        image: databaseIcon,
        count: 2,
    },

    /**
     * Databases
     */
    {
        name: 'Mysql',
        label: 'MySQL',
        image: mySqlIcon,
        count: 1,
    },
    {
        name: 'MysqlCluster',
        label: 'MySQL',
        image: mySqlIcon,
        count: 2,
    },

    {
        name: 'Oracle',
        label: 'Oracle',
        image: oracleIcon,
        count: 1,
    },
    {
        name: 'OracleCluster',
        label: 'Oracle',
        image: oracleIcon,
        count: 2,
    },

    {
        name: 'PostgreSql',
        label: 'PostgreSQL',
        image: postgresSqlIcon,
        count: 1,
    },
    {
        name: 'PostgreSqlCluster',
        label: 'PostgreSQL',
        image: postgresSqlIcon,
        count: 2,
    },

    {
        name: 'Elasticsearch',
        label: 'Elasticsearch',
        image: elasticSearchIcon,
        count: 1,
    },
    {
        name: 'ElasticsearchCluster',
        label: 'Elasticsearch',
        image: elasticSearchIcon,
        count: 3,
    },

    /**
     * AWS
     */
    {
        name: 'Ec2',
        label: 'EC2',
        image: ec2Icon,
        count: 1,
    },
    {
        name: 'Ec2Cluster',
        label: 'EC2',
        image: ec2Icon,
        count: 2,
    },

    {
        name: 'Rds',
        label: 'RDS',
        image: rdsIcon,
        count: 1,
    },
    {
        name: 'RdsCluster',
        label: 'RDS',
        image: rdsIcon,
        count: 2,
    },

    {
        name: 'Elb',
        label: 'ELB',
        image: elbIcon,
        count: 1,
    },

    {
        name: 'S3',
        label: 'S3',
        image: s3Icon,
        count: 1,
    },

    {
        name: 'DynamoDb',
        label: 'DynamoDB',
        image: dynamoDbIcon,
        count: 1,
    },

    {
        name: 'Redshift',
        label: 'Redshift',
        image: redShiftIcon,
        count: 1,
    },

    {
        name: 'Cloudwatch',
        label: 'Cloudwatch',
        image: cloudWatchIcon,
        count: 1,
    },

    {
        name: 'Elasticache',
        label: 'Elasticache',
        image: elasticCacheIcon,
        count: 1,
    },

    {
        name: 'Iam',
        label: 'IAM',
        image: iamIcon,
        count: 1,
    },

    {
        name: 'SimpleDb',
        label: 'SimpleDB',
        image: simpleDbIcon,
        count: 1,
    },

    {
        name: 'Swf',
        label: 'SWF',
        image: swfIcon,
        count: 1,
    },

    {
        name: 'Cloudfront',
        label: 'Cloudfront',
        image: cloudFrontIcon,
        count: 1,
    },

    {
        name: 'Sqs',
        label: 'SQS',
        image: sqsIcon,
        count: 1,
    },

    {
        name: 'Sns',
        label: 'SNS',
        image: snsIcon,
        count: 1,
    },

    {
        name: 'Route53',
        label: 'Route53',
        image: route53Icon,
        count: 1,
    },

    {
        name: 'StorageGateway',
        label: 'Storage Gateway',
        image: storageGatewayIcon,
        count: 1,
    },

    {
        name: 'CloudFormation',
        label: 'CloudFormation',
        image: cloudFormationIcon,
        count: 1,
    },

    {
        name: 'CloudSearch',
        label: 'CloudSearch',
        image: cloudSearchIcon,
        count: 1,
    },

    {
        name: 'Glacier',
        label: 'Glacier',
        image: glacierIcon,
        count: 1,
    },

    {
        name: 'ElasticBeanstalk',
        label: 'Elastic Beanstalk',
        image: elasticBeanstalkIcon,
        count: 1,
    },

    {
        name: 'Ebs',
        label: 'EBS',
        image: ebsIcon,
        count: 1,
    },

    {
        name: 'Lambda',
        label: 'Lambda',
        image: lambdaIcon,
        count: 1,
    },

    {
        name: 'ApiGateway',
        label: 'API Gateway',
        image: apiGatewayIcon,
        count: 1,
    },
];

export default nodeTypes;
