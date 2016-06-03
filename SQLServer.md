**SQL Server**
-

Built-in Functions

>ROW_NUMBER [refer](http://msdn.microsoft.com/en-IN/library/ms186734.aspx "")
>>Returns the sequential number of a row within a partition of a result set, starting at 1 for the first row in each partition. 
>
>DENSE_RANK [refer](http://msdn.microsoft.com/en-IN/library/ms173825.aspx "")
>>Returns the rank of rows within the partition of a result set, without any gaps in the ranking. The rank of a row is one plus the number of distinct ranks that come before the row in question. 
> 
>NTILE [refer](http://msdn.microsoft.com/en-IN/library/ms175126.aspx "")
>>Distributes the rows in an ordered partition into a specified number of groups. The groups are numbered, starting at one. For each row, NTILE returns the number of the group to which the row belongs. 


>Column Identification Queries
> >Identify specific column by name
> >> SELECT t.name AS table_name, SCHEMA_NAME(schema_id) AS schema_name, c.name AS column_name FROM sys.tables AS t INNER JOIN sys.columns c ON t.OBJECT_ID = c.OBJECT_ID WHERE c.name LIKE '%-Column-Name-%' ORDER BY schema_name, table_name;
>
> >List all DB column
> >>SELECT t.name AS table_name, SCHEMA_NAME(schema_id) AS schema_name, c.name AS column_name FROM sys.tables AS t INNER JOIN sys.columns c ON t.OBJECT_ID = c.OBJECT_ID ORDER BY schema_name, table_name; 



> SQL Server Exclusive Access Error
> >SQL DB if in use by some process , will throw SqlError: Exclusive access could not be obtained..... Smo)
![Restore Exclusive Access not granted](SQLServer/RestoreExclusiveAccess.jpg)
>
> >to fix the issue:
> >>Open Activity Monitor ... Right click on the SQL Serve Instance Name under Object Explorer in SQL Server Management Studio.
![Activity Monitor](SQLServer/ActivityMonitor.jpg)
> >> 
> >>Identify the running process for the DB using Database Column
> >>Right click and click Kill Process option
![Kill Sql Process](SQLServer/ActivityMonitorKillProcess.jpg)


> Change Data Capture [refer](https://msdn.microsoft.com/en-us/library/cc645937%28v=sql.110%29.aspx "")
> >Change data capture records insert, update, and delete activity that is applied to a SQL Server table.  
> >This makes the details of the changes available in an easily consumed relational format. 
> >change data capture must be explicitly enabled for the database using the stored procedure [sys.sp_cdc_enable_db](https://msdn.microsoft.com/en-us/library/bb510486%28v=sql.110%29.aspx ""). 
> >source tables can then be identified as tracked tables by using the stored procedure [sys.sp_cdc_enable_table](https://msdn.microsoft.com/en-us/library/bb522475%28v=sql.110%29.aspx ""). 
 ![CDC](SQLServer/ChangeDataCapture.gif)


[Backup]("Backup" SQLServer/BAK/backup.md) 
[Restore]("Restore" SQLServer/BAK/restore.md)
