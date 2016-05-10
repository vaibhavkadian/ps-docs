-

Toad

>user login will see based on select schema.
>select the appropriate schema to see visible table in the window.
>
> >a scehma is also refered as -OWNER- at system metadata level
> >> ex: SELECT * FROM all_cons_columns where OWNER='-SCHEMA-NAME-';
> >logged in user is another scope for session based activities and user in tracing
> >> ex: select sid, username from v$session where username='-LOGIN-USER-';


Oracle

>session variables are store as "SYS_xxxx" , these can be tracked by the executing user login name.
>but its gets difficult for batch / transaction based multiple query execution if you dont have tracing rights.
>
> >to identify USER specific session variable(s) 
> >>select sid, username from v$session where username='-LOGIN-USER-';
>
> >to identify the current user session variable metadata
> >>select * from v$sql_bind_metadata where upper(bind_name) = 'SYS_B_5'; 
>
> >to identify the session variable used w.r.t specific SQL Query.
> >SQL_ID is the variable and Query scope used to ge the current value in the following query.
> >> SELECT SQL_ID, SQL_TEXT FROM V$SQL WHERE SQL_TEXT LIKE '%PART-OR-FULL-SQL-QUERY-TEXT-TO-BE-TRACED-%';
>
> >to identify the session variable variable based of SQL_ID identified from above.
> >> SELECT NAME, VALUE_STRING, DATATYPE_STRING, LAST_CAPTURED FROM V$SQL_BIND_CAPTURE WHERE SQL_ID='SQL-ID-FOR-QUERY';