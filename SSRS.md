**SQL Server Reporting Services aka SSRS**
-
It is a vary basic and row reporting tool which can you used to represent most of the data.  
It can be used for any basic reporting need.  
Some of the use cases for it are :  

1. Schedule Email delivery of report.
2. Self contained reports.
	* can use Data-Driven subscription for reports that required input [Windows Authentication Integrated Security is a no no for this].

.rdl Report Definition File
  
.rdl.data Report cache used only while "Preview" from solution
  
	they're purely to speed up report execution time during development when you repeatedly run the report with the same parameters whilst tweaking the layout.
	if we don't want this default behavior to happen and if we want to test the actual execution time of report on two consecutive runs for the same input parameter i.e. making report to render data from data source each time instead of using cached data perform below steps.
		goto the below path location :
			C:\Program Files\Microsoft Visual Studio 10.0\Common7\IDE\PrivateAssemblies\RSReportDesigner
		Open RSReportDesigner.xml file and change
			<Add Key="CacheDataForPreview" Value="true" />  to <Add Key="CacheDataForPreview" Value="false" />
			and then save it.




[DataDriven E-Mail Subscriptions](SSRS/DataDrivenEmailSubscriptions.md "DataDriven E-Mail Subscriptions")



