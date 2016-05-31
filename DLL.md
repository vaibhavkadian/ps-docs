** Dll TnT **

-

Generate Public Key for an Assembly
> use sn.exe
> Add a Get Assembly Public Key item to the VS Tools menu
>> click External Tools on the Tools menu
>> click Add and enter Get Assembly Public Key in the Title box
>> Fill the Command box by browsing to sn.exe
>> In the Arguments box, type the following (case sensitive): -Tp $(TargetPath)
>> Select the Use Output window check box
>> Click OK. The new command is added to the Tools menu

To make **internal** type visible outside an assembly.
> use assembly level attribute [InternalsVisibleTo]("https://msdn.microsoft.com/en-us/library/system.runtime.compilerservices.internalsvisibletoattribute.aspx")
>> ex: [assembly:InternalsVisibleTo("MyProjectTests")]
>> these assemlbies are called Friend assembly
>> they can use internal type from the origin assembly

To use internal methods of a Type
> via Reflection
>> var method = instance.GetType().GetMethod( methodName, BindingFlags.NonPublic | BindingFlags.Instance, null, paramTypeArray, null);
>> return method.Invoke(instance, parameters);

To use internal properties of a Type
> via Reflection
>> var property = instance.GetType().GetProperty( propertyName, BindingFlags.NonPublic | BindingFlags.Instance, null, null);
>> return property.GetValue(instance, null);



[Autofac]("http://docs.autofac.org/en/latest/#welcome-to-autofac-s-documentation")
[Basic app example with IoC in mind]("http://docs.autofac.org/en/latest/getting-started/index.html#getting-started")
[Assembly Scanning]("http://docs.autofac.org/en/latest/register/scanning.html#assembly-scanning")
[IIS hosted assemblies not getting scanned]("http://docs.autofac.org/en/latest/faq/iis-restart.html#why-aren-t-my-assemblies-getting-scanned-after-iis-restart")
[Autofac Application Integration]("http://docs.autofac.org/en/latest/integration/index.html#application-integration")





