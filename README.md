# lesson
## setting the environment up/down
```
  docker compose up -d
  docker compose down
```

## db
```
  docker exec -it mysql_db bash
  mysql -uroot -p
  use nodedb;
  CREATE TABLE people(id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), primary key(id));
```
## app
```
  docker compose up -d
  docker exec -it app bash
  npm install
  node index.js
```