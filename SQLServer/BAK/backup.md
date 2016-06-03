The msdb system database is the primary repository for storage of SQL Agent, backup, Service Broker, Database Mail, Log Shipping, restore, and maintenance plan metadata. We will be focusing on the handful of system views associated with database backups for this tip:

*   **dbo.backupset**: provides information concerning the most-granular details of the backup process
*   **dbo.backupmediafamily**: provides metadata for the physical backup files as they relate to backup sets
*   **dbo.backupfile**: this system view provides the most-granular information for the physical backup files

Based upon these tables, we can create a variety of queries to collect a detailed insight into the status of backups for the databases in any given SQL Server instance.

