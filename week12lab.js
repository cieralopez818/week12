const URL_ENDPOINT= 'https://64409916792fe886a891fe21.mockapi.io/week12lab'
console.log()
function render() {
    $.get(URL_ENDPOINT).then(data => { 
        $('tbody').empty()
    data.map(friend => {
 $('tbody').append(
     $(`
        <tr>
         <td>${friend.id}</td>
         <td>${friend.fullName}</td>
         <td>${friend.musicGenre}</td>
         <td>
            <button onclick="deleteUser(${friend.id})">Delete Me</button>
         </td>
        </tr>
            `)
        )
    })
})
}
render()
$('#submitFriend').click(function () {

    $.post(URL_ENDPOINT, {
        fullName: $('#fullName').val(),
        musicGenre: $('#newMusic').val(),
    }).then(render)
})


function deleteUser (id) {
    $.ajax(`${URL_ENDPOINT}/${id}`,{
        method: 'DELETE'
    }).then(render)
}

function updateUser (e) {
    e.preventDefault()
    let id = $('#updateId').val()
    $.ajax(`${URL_ENDPOINT}/${id}`, {
        method: 'PUT',
        data: {
            fullName: $('#updateName').val(),
            musicGenre: $('#updateGenre').val(),
        }
        // console.log('when through method')
    }).then(render)
}

$('#updateFriend').click((e)=>updateUser(e))

