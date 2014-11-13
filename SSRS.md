**SQL Server Reporting Services aka SSRS**
-
It is a very basic and raw reporting tool which can be used to represent most of the data. Having said that you can still create great UX designs.  
  
It can be used for any basic reporting need.  
Some of the use cases for it are :  

1. Schedule Email delivery of report.
2. Self contained reports.
	* can use Data-Driven subscription for reports that required input [Windows Authentication Integrated Security is a no no for this].

.rdl Report Definition File
  
> these are plain XML files, you can edit them in a normal textpad if the only object is to compare and sync up reports.  
>.rdl.data Report cache used only while "Preview" from solution.
>
>>They're purely to speed up report execution time during development when you repeatedly run the report with the same parameters whilst tweaking the layout.
>  
>>If we don't want this default behavior to happen and if we want to test the actual execution time of report on two consecutive runs for the same input parameter i.e. making report to render data from data source each time instead of using cached data perform below steps.
>>>goto the below path location :
>
>>>C:\Program Files\Microsoft Visual Studio 10.0\Common7\IDE\PrivateAssemblies\RSReportDesigner
>
>>>Open RSReportDesigner.xml file and change Value for Key="CacheDataForPreview" to Value="false" and then save it.




[Report Server Setup](SSRS/ReportServerSetup.md "Report Server Setup")  
[DataDriven E-Mail Subscriptions](SSRS/DataDrivenEmailSubscriptions.md "DataDriven E-Mail Subscriptions")  

---

 
[Things Learnt the Hard Way ... Best Practices](SSRS/ThingsLearntHardWay.md "Things Learnt the Hard Way ... Best Practices")



