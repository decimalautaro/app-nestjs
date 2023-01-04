-- CREATE DB IF NOT EXISTS postgresDB

SELECT 'CREATE DATABASE postgresDB'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'postgresDB')\gexec