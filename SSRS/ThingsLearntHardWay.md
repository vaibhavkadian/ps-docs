#Best Practice #
---

**Things Learnt the HARD way**

SSRS reporting IDE is not merciful neither is Reporting services is telling what is wrong by means of error.

I have come across many occasions where the error reported in IDE and/or log is 
>Report cannot be shown  
>One or more required parameter is not specified

whereas neither of them give the actual context or origin of the error. 
  
Based on my experience and time invested [actually wasted because of the very raw and strict nature of SSRS code] below are some of the things one should keep in mind while creating reports.
> **Parameter sequence is very IMPORTANT** [that is why they have given UP/DOWN arrows in GUI]
> 
> >Always keep raw/basic parameter above and dependent/derived parameters below  
>   
> >Only if required mention the Available/Default values  
> 
> > Add/Remove parameter from the calling DB object i.e. SP is not reported at compile-time but will fail at run-time
>  
> > Parameter with Available value specified should not be passed from calling report [in case of master-subreport situation.     

--- 

> **All parameter with "Available Value" fire immedialtely after report is called** in case of values coming from DB objects. Use SQL Profiler to see this.
> 
>**A single error on any report item will fail the report** be it incorrect parameter value on some shared or report dataset that you are currently not using.  
>   

--- 