function get_current(){
    $.ajax({
            url:'/current',
            type:'GET',
            contentType: 'application/json',
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                //response=JSON.stringify(response);
                if (response["user"]!="Paulo_admin_master"){
                var c="http://www.munana.herokuapp.com/Login";
                window.location=c;
                }

            },
            error: function(response){
                //alert(JSON.stringify(response));


            }
        });
}

$(function(){
    var url = "http://www.munana.herokuapp.com/cursos";


    $("#grid").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url ,
            insertUrl: url ,
            updateUrl: url ,
            deleteUrl: url ,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },

        remoteOperations: true,
        paging: {
            pageSize: 12
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20]
        },
        columns: [{
            dataField: "id",
            dataType: "number",
            allowEditing: false
        }, {
            dataField: "Academia.Nombre",
            caption: "Academia",
            lookup: {
                    dataSource: DevExpress.data.AspNet.createStore({
                        key: "id",
                        loadUrl: "http://www.munana.herokuapp.com/academias",
                        onBeforeSend: function(method, ajaxOptions) {
                            ajaxOptions.xhrFields = { withCredentials: true };
                        }
                    }),
                    displayExpr: "Nombre"
                }
      }, {
            dataField: "Nombre_del_curso"
        }, {
            dataField: "Turno"
        },{
            dataField: "Horario_Inicio",
            dataType:"number"
        },{
            dataField:"Horario_Final",
            dataType:"number"
        },{
            dataField:"Profesor",
        }
        ]
    }).dxDataGrid("instance");
});
