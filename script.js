const convertFahrenheit=() =>
{
   var celsius=parseFloat(document.querySelector("#celsiusInput").value);
   var fahout = (celsius*1.8) +32;
   var a= fahout.toFixed(2);
   document.querySelector("#celsiusInput").value=celsius;
   document.querySelector("#fahrenheitInput").value=a;

}

const convertCelsius=() =>
{
   var fahrenheit=parseFloat(document.querySelector("#fahrenheitInput").value);
   var celout = (fahrenheit - 32) / 1.8;
   var b = celout.toFixed(2);
   document.querySelector("#celsiusInput").value=b;
   document.querySelector("#fahrenheitInput").value=fahrenheit;

}

const reset=() =>
{
    document.querySelector("#celsiusInput").value=" ";
    document.querySelector("#fahrenheitInput").value=" ";
}

