document.addEventListener('DOMContentLoaded', () => {
    var button = document.getElementById('btn');
    button.addEventListener('click', () => {
        var token = document.getElementById('token').value;
        var id = document.getElementById('idpost').value;
        var luckey = document.getElementById('luckey').value;
        var disabled = document.createAttribute('disabled');
        button.setAttributeNode(disabled);
        button.innerHTML = 'Scanning....';
        let xhttp = new XMLHttpRequest();
        xhttp.open(`GET`, `https://graph.facebook.com/v3.3/${id}/comments?limit=5000&offset=0&access_token=${token}`, false);
        xhttp.send();
        var reponse = JSON.parse(xhttp.responseText);
        var length = reponse.data.length;
        var table = document.getElementById('table');
        table.innerHTML = ' ';
        for (var i = 1; i <= parseInt(luckey); i++) {
            var ran = Math.random();
            var luckeyNum = Math.ceil(length * ran);
            var messs = reponse.data[luckeyNum].message;
            var mess = (messs.length > 60) ? messs.substring(0, 50) + '...' : messs;
            table.innerHTML += '<tr><td>' + i + '</td><td><div style="margin-right: 10px;" class="flag"><img class="img" src="https://graph.facebook.com/' + reponse.data[luckeyNum].from.id + '/picture?type=large&redirect=true&width=25&height=25"></div></td><td class="description"><a href="https://fb.com/' + reponse.data[luckeyNum].from.id + '" target="_blank">' + reponse.data[luckeyNum].from.name + '</a><td class="description">' + reponse.data[luckeyNum].from.id + '</td></td><td class="description"><a href="https://fb.com/' + reponse.data[luckeyNum].id + '" target="_blank">View Comment</a></td><td class="description">' + mess + '</td></tr>';
            console.log(reponse.data[luckeyNum].from.id);
        }
        document.getElementById('btn').removeAttribute('disabled');
        button.innerHTML = 'Submit';
    });
});
