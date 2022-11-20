// confirm to user that entry has been added
$("#add_exercise").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_exercise").on(function(event){
    event.preventDefault(); // prevent default behaviour of refresh when submit

    // update the entry itself and make sure entry is unique
    var unindexed_array = $(update_exercise).serializeArray();
    var data = {}
    
    $.map(unindexed_array, function(n, i){
        data[n['exercise_type']] = n['value']
    })

    // actual request to mongodb
    var request = {
        "url" : `http://localhost:3000/api/exercise_instance/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
    // confirm completion
    $.ajax(request).done(function(response){
        alert("Instance Updated Successfully!");
    })

})

// delete javascript with confirmation
if(window.location.pathname == "/tracking"){
    // checking if the button is pressed
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        // get the id of the entry that needs to be deleted
        var id = $(this).attr("data-id")
        
        // actual request to delete 
        var request = {
            "url" : `http://localhost:3000/api/exercise_instance/${id}`,
            "method" : "DELETE"
        }

        // confirm from user
        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}