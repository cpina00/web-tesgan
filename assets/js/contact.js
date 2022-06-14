function WriteFile()
{
    var fso = new CreateObject("Scripting.FileSystemObject");
    var fh = fso.CreateTextFile("./prueba.txt", true);
    fh.WriteLine("texto de prueba");
    fh.Close();
}



var mensaje = document.getElementById("mensaje").addEventListener("click", (e) => {
    
})