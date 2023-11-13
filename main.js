var itemNumber = localStorage.length

function onLoad()
{
	document.getElementById("list").innerHTML = '';
	if (itemNumber > 0)
	{
		for (let i = 0; i < itemNumber; i++)
			document.getElementById("list").innerHTML += "</br><li>" + localStorage.getItem(i) + "</li>";
	}
}

function addList()
{
	localStorage.setItem(itemNumber, document.getElementById("article").value);
	itemNumber = localStorage.length
	onLoad();
	document.getElementById("article").value = '';
}

function clearPage()
{
	localStorage.clear();
	itemNumber = 0;
	onLoad();
}
