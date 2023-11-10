# Kafka workshop

## Getting started

### prerequisites

- Docker Desktop
- Node 18 (optional, if you want ot build/run the applications outside docker)

### Start containers

```docker compose up -d```

### Build applications

If you make changes to the applications you need to rebuild them to see the changes in the docker containers:

```docker compose build```

### Remove applications

```docker compose down```

## Application Structure

### Producers

There are 2 cameras (producers) and they are reachable on <http://localhost:3001/scan> and <http://localhost:3002/scan>.
If you want to publish multiple messages you could also give it an amount like <http://localhost:3001/scan/1000>

### Topic

There is one topic (anpr-topic) with 3 replications and 10 partitions.

If you want to create a new topic with different replications or partitions you can update the `KAFKA_NUM_PARTITIONS`, `KAFKA_DEFAULT_REPLICATION_FACTOR` of the 3 kafka instances and redeploy kafka. Kafka will create the topic when a producer or consumer asks for the topic.

### Consumers

There 2 consumers (police, cjib, both have 2 instances) and they will log when they receive a message from the anpr-topic.

### Insights

To get insights into your Kafka cluster you can go to <http://localhost:8080>. In the AKHQ application you can see your topics, partitions, consumers, offsets, etc.

## Exercises

### Exercise 1 - Getting started

1. Clone the repository or use Github Codespaces <https://github.com/sanderblijlevens/Workshop-Kafka>
2. Produce multiple messages
3. Open AKHQ (<http://localhost:8080>)
   - Check the cluster and see the partitions, leaders and consumer offsets

### Exercise 2 - Observations

1. Create more consumers than partitions, what happened?
2. Kill one broker, what happened?

### Exercise 3 - Extend the application

1. Create a new Consumer group on the existing topic.
2. Create a new producer, topic, and consumer group. Anything goes!
    - Optionally: create your consumer in another programming language
3. Create a new Kafka Cluster.
