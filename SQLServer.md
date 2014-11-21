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