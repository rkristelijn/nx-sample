# Database (db)

This project makes uses of a single database named Postgres. Originally Postgres didn't use SQL, so actually this version of Postgres is named PostgreSQL, but then again it is still Postgres.

# Prerequisites

You need to install docker desktop

# Basic usage

This database runs in a docker container. The commands are stored in `package.json` so you van simply run them from there not to be concerned with the settings. Below is the information if you want to bypass these and use `docker` or `psql` directly.

| Command    | Description                         |
| ---------- | ----------------------------------- |
| db:up      | Starts db in background             |
| db:down    | Stops db in background              |
| db:connect | Connects to psql (password: `pass`) |
| db:backup  | Backs up to `data/sample.db`        |
| db:restore | Restores from `data/sample.db`      |

## Configuration

see [docker-compose.yml](../../docker-compose.yml)

| property  | setting    |
| --------- | ---------- |
| hostname  | postgresdb |
| container | nx-sample  |
| username  | user       |
| password  | pass       |
| db name   | sample     |

## Start

```bash
docker-compose up
Creating nx-sample ... done
Attaching to nx-sample
nx-sample | The files belonging to this database system will be owned by user "postgres".
nx-sample | This user must also own the server process.
nx-sample |
nx-sample | The database cluster will be initialized with locale "en_US.utf8".
nx-sample | The default database encoding has accordingly been set to "UTF8".
nx-sample | The default text search configuration will be set to "english".
nx-sample |
nx-sample | Data page checksums are disabled.
nx-sample |
nx-sample | fixing permissions on existing directory /var/lib/postgresql/data ... ok
nx-sample | creating subdirectories ... ok
nx-sample | selecting dynamic shared memory implementation ... posix
```

## Connect

```bash
docker exec -it nx-sample psql -h postgresdb -U user sample
Password for user user:
psql (12.3 (Debian 12.3-1.pgdg100+1))
Type "help" for help.

sample=# \l
                             List of databases
   Name    | Owner | Encoding |  Collate   |   Ctype    | Access privileges
-----------+-------+----------+------------+------------+-------------------
 postgres  | user  | UTF8     | en_US.utf8 | en_US.utf8 |
 sample    | user  | UTF8     | en_US.utf8 | en_US.utf8 |
 template0 | user  | UTF8     | en_US.utf8 | en_US.utf8 | =c/user          +
           |       |          |            |            | user=CTc/user
 template1 | user  | UTF8     | en_US.utf8 | en_US.utf8 | =c/user          +
           |       |          |            |            | user=CTc/user
(4 rows)

sample=#
```

### Basic commands

| command           | description                           |
| ----------------- | ------------------------------------- |
| `\l`              | List of dbs                           |
| `\c <database>`   | switch db                             |
| `\dt`             | list of tables                        |
| `\d <table_name>` | show table definition                 |
| `\g`              | show previous commands                |
| `\?`              | list all commands                     |
| `\h DROP TABLE`   | Help on drop table command            |
| `\timing`         | Set timing on (to see execution time) |

## Start in background

```bash
docker-compose up -d
Starting nx-sample ... done
```

## Stop db running in background

```bash
docker-compose down
Stopping nx-sample ... done
Removing nx-sample ... done
```

## Backup DB

```bash
docker exec -t nx-sample pg_dumpall -c -U user > data/sample.sql
```

### with timestamp

```bash
docker exec -t nx-sample pg_dumpall -c -U user > dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
```

## Restore DB

```bash
cat data/sample.sql | docker exec -i nx-sample psql -U user -d sample
```

# pgAdmin 4

Every database needs a proper database tool. This repo ships with pgAdmin 4 in a docker image. Whenever you do `docker-compose up` the tool gets started automatically.

Point your browser to `http://localhost:5050/`

- User: `admin`
- Pass: `admin`

Now you need to add a server:

- Name: any, I choose `local`

Tab connection:

- Host name/address: `postgres`
- Port: `5432` (default)
- User: `user`
- Password: `pass`

The tool saves these settings.

No you can drill down to:

- Servers
  - Databases (2)
    - sample
      - Schemas (1)
        - public
          - Tables

## Create, insert and select example

```sql
CREATE TABLE foo (
id SERIAL,
bar varchar);

INSERT INTO foo (bar) values ('blah');
INSERT INTO foo (bar) values ('blah');

SELECT * FROM foo;

1,blah
2,blah
```

# Resources

- https://blog.jetbrains.com/pycharm/2017/04/docker-compose-adding-a-database-service/?gclid=CjwKCAjw8pH3BRAXEiwA1pvMsf2AER5_If90dI71wKQjdUMP5FgdOg92lW9lH6IaJWpDEMvCmfxzyxoCeYEQAvD_BwE
- https://docs.tibco.com/pub/bwce/2.5.0/doc/html/GUID-E7191578-7E50-4460-93BA-2FF1621CD5B9.html
- https://www.datacamp.com/community/tutorials/10-command-line-utilities-postgresql?utm_source=adwords_ppc&utm_campaignid=9942305733&utm_adgroupid=100189364546&utm_device=c&utm_keyword=&utm_matchtype=b&utm_network=g&utm_adpostion=&utm_creative=255798340456&utm_targetid=dsa-929501846124&utm_loc_interest_ms=&utm_loc_physical_ms=9064829&gclid=CjwKCAjw8pH3BRAXEiwA1pvMsYUXPJpy5GOPDh1O1UfDudkamrAxy5pOH6rbbazU9L1Ju-qddRbSfBoCHTEQAvD_BwE
- https://app.pluralsight.com/library/courses/postgresql-getting-started/table-of-contents
- https://stackoverflow.com/questions/24718706/backup-restore-a-dockerized-postgresql-database
