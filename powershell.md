https://rkeithhill.wordpress.com/2010/05/10/pscx-2-0-show-tree/  
https://social.technet.microsoft.com/Search/en-US?query=pscx&rn=Hey,%20Scripting%20Guy!%20Blog&rq=site:blogs.technet.com/b/heyscriptingguy/&beta=0&ac=4  


http://stackoverflow.com/questions/4192072/how-to-process-a-file-in-powershell-line-by-line-as-a-stream  
https://technet.microsoft.com/en-us/library/ee156818.aspx?f=255&MSPPError=-2147217396  
https://blogs.technet.microsoft.com/heyscriptingguy/2013/04/19/use-powershell-to-copy-files-and-folders-to-a-new-location/  
https://technet.microsoft.com/en-us/magazine/hh551144.aspx  


vs project build step using powershell  
http://stackoverflow.com/questions/6500320/post-build-event-execute-powershell  



(New-Object system.data.oledb.oledbenumerator).GetElements() | select SOURCES_NAME, SOURCES_DESCRIPTION 




$AceVersion = ((New-Object System.Data.OleDb.OleDbEnumerator).GetElements() | Where-Object { $_.SOURCES_NAME -like "Microsoft.ACE.OLEDB*" } | Sort-Object SOURCES_NAME -Descending | Select-Object -First 1 SOURCES_NAME).SOURCES_NAME

$connString = "Provider=$AceVersion;Data Source=`"$filepath`";Extended Properties=`"Excel 12.0 Xml;HDR=NO`";"