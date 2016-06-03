

*   **NORECOVERY:** Tells SQL Server that you are not finished restoring the database and that subsequent restore files will occur. While the database is in this state, the database is not yet available, so no connections are allowed.
*   **RECOVERY:** Tells SQL Server that you are finished restoring the database, and it is ready to be used. This is the default option, and it is by far the one that is used most often.
*   **STANDBY:** Tells SQL Server that the current database is not yet ready to be fully recovered and that subsequent log files can be applied to the restore. You can use this option so that connections are available to the restore database if necessary. However, future transaction logs can only be applied to the database if no current connections exist.

Once you restore the full backup using the NORECOVERY option, you can begin applying the transaction log backups or the differential backup.

**Differential backup**

A differential backup is a backup of any changes to the database that have occurred since the last full database backup. If you have multiple differential backups, you will only need to restore the very last one taken. In this situation, there are no differential backups, so you can move directly to the transaction log backups.

**Transaction log backups** A transaction log backup keeps track of all transactions that have occurred since the last transaction log backup; it also allows you to restore your database to a point in time before a database error occurred. Transaction log backups occur in sequence, creating a chain. When restoring a sequence of transaction log backups to a point in time, it is required that the transaction log files are restored in order.

When you use a database maintenance plan to create the transaction log backups, a time indicator is typically included in the transaction log file name. The script below applies three transaction log backups using the NORECOVERY option, and the last statement restores the database to availability to the time frame at the very end of the last transaction log file.

`RESTORE LOG NewDatabase`

`

FROM DISK = ''D: \BackupFiles\TestDatabase_TransactionLogBackup1.trn'

`

`WITH NORECOVERY`

`RESTORE LOG NewDatabase`

`

FROM DISK = ''D: \BackupFiles\ TestDatabase_TransactionLogBackup2.trn'

`

`WITH NORECOVERY`

`RESTORE LOG NewDatabase`

`

FROM DISK = ''D: \BackupFiles\ TestDatabase_TransactionLogBackup3.trn'

`

`WITH NORECOVERY`

`RESTORE LOG NewDatabase`

`

FROM DISK = ''D: \BackupFiles\ TestDatabase_TransactionLogBackup4.trn'

`

`WITH RECOVERY`

**Restoring to a point in time** In the example above, you restore the database to the end of the last transaction log. If you want to recover your database to a specific point in time before the end of the transaction log, you must use the STOPAT option. The script below restores the fourth transaction log in the log sequence to 4:01 PM — just before the database mishap occurred.

`RESTORE LOG NewDatabase`

`

FROM DISK = ''D: \BackupFiles\ TestDatabase_TransactionLogBackup4.trn'

`

`WITH STOPAT = N'6/28/2007 4:01:45 PM', RECOVERY`

Now that you have the database restore to a point where you need it to be, it is time to decide how to help the developers in order to make their situation a little bit easier. My suggestion is to copy the table the developers need to a separate table on the server so that you or they can correct the data problem.