$(function () {

	//1.初始化数据
	var json = [];
	for(i=1;i<=10000;i++){
		var a = {"ID":i+"","Name":"好多鱼"+i,"ParentName":"上一条鱼"+i,"Level":i,"Desc":"测试"+i};
		json.push(a);
	}
    //2.初始化Table
    var oTable = new TableInit("tb_departments",'toolbar');	
	oTable.Init(json);
	
    //3.初始化Button的点击事件
    var oButtonInit = new ButtonInit();
    oButtonInit.Init();

});
function createTable(id,toolbarId){
	//1.初始化数据
	var json = [];
	for(i=1;i<=10000;i++){
		var a = {"ID":i+"","Name":"好多鱼"+i,"ParentName":"上一条鱼"+i,"Level":i,"Desc":"测试"+i};
		json.push(a);
	}

    //2.初始化Table
    var oTable = new TableInit(id);	
	oTable.Init(json);
	
    //3.初始化Button的点击事件
    var oButtonInit = new ButtonInit();
    oButtonInit.Init();
}
var TableInit = function (id,toolbarId) {
    var oTableInit = new Object();
    var column = [];
    if(id=='tb_departments'||id=="tb3"){
    	column = [{
                checkbox: true
            },{
                field: 'ID',
                title: '部门ID'
            }, {
                field: 'Name',
                title: '部门名称'
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
            }, {
                field: 'Name',
                title: '部门名称'
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
            }, {
                field: 'Name',
                title: '部门名称'
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
            }];
    }else{
    	column =  [{
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述'
            }];
    }
    if(id=='tb_departments'){
    	toolbarId = 'toolbar2';
    }
    //初始化Table
    oTableInit.Init = function (json) {
        $('#'+id).bootstrapTable({
            //url: 'bootJson.json',         //请求后台的URL（*）
            contentType: 'application/json;charset=UTF-8',//这里我就加了个utf-8
        	data:json,
        	dataType: 'json',
            method: 'get',                      //请求方式（*）
            toolbar: '#'+toolbarId,                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: true,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            columns: column
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            order: params.order,
            ordername: params.sort,
            departmentname: $("#txt_search_departmentname").val(),
            Level: $("#txt_search_level").val(),
            search:params.search
        };
        return temp;
    };
    return oTableInit;
};


var ButtonInit = function () {
    var oInit = new Object();
    var postdata = {};

    oInit.Init = function () {
        //初始化页面上面的按钮事件
    };

    return oInit;
};

var objData ={
	'cust':'客户管理',
	'add':'新增',
	'edit':'修改',
	'del':'删除',
	'guo':'国内单笔保理',
	'dengji':'登记',
	'login':'申请',
	'again':'复核',
	'road':'在途',
	'deal':'处理',
	'zhuan':'转让',
	'rong':'融资',
	'pay':'付款'
}
/**
 * 获取url的参数
 * @param {Object} paramName
 */
function getParam(paramName) {
    paramValue = "";
    isFound = false;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase()) {
                    paramValue = arrSource[i].split("=")[1];
                    isFound = true;
                }
            }
            i++;
        }
    }
    $.each(objData, function(i,v) {
    	if(i==paramValue){
    		paramValue = v;
    	}
    });
    return paramValue;
}
