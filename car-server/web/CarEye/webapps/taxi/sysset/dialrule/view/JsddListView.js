Ext.define('DialRuleApp.view.JsddListView', {
			extend : 'Ext.grid.Panel',
			border : false,
			id : 'jsddListViewGrid',
			alias : 'widget.jsddListView',
			title : '即时调度历史规则',
			// region: "center",
			 height:330,
			frame : true,
			store : "DialRuleListStore",
			multiSelect : true,
			draggable : true,
			stripeRows : true, // 表格是否隔行换色，默认为false
			loadMask : true, // 是否在加载数据时显示遮罩效果，默认为false
			viewConfig : {
				enableTextSelection : true
			},// grid中的内容能够复制
			// selModel: { selType: 'checkboxmodel' }, //在首列實現checkbox，僅此在首列
			columns : [{
						header : 'No',
						xtype : 'rownumberer'
					}, {
						header : '半径范围大小(米)',
						width : 120,
						dataIndex : 'radius',
						sortable : true
					}, {
						header : '车辆类型',
						width : 100,
						dataIndex : 'cartype',
						sortable : true,
						renderer : function(v) {
							return v.replace(1, '车辆管理');
						}
					}, {
						header : '选择车辆数量(辆)',
						width : 100,
						dataIndex : 'carcount',
						sortable : true
					}, {
						header : '车辆调度状态',
						width : 120,
						dataIndex : 'carstatus',
						renderer : function(v) {
							return v.replace(1, '未调度').replace(2, '调度中')
									.replace(3, '已调度');
						}
					}, {
						header : '空重车状态',
						width : 100,
						dataIndex : 'zkstate',
						renderer : function(v) {
							return v.replace(0, "空车").replace(1, "重车");
						}
					}, {
						header : '欠费是否可调度',
						width : 100,
						dataIndex : 'arrearage',
						renderer : function(v) {
							if (1 == v) {
								return '可调度';
							} else if (2 == v) {
								return '不可调度';
							}
						}
					}, {
						header : '违约是否可调度',
						width : 100,
						dataIndex : 'breach',
						renderer : function(v) {
							if (1 == v) {
								return '可调度';
							} else if (2 == v) {
								return '不可调度';
							}
						}
					}, {
						header : '黑名单是否可调度',
						width : 120,
						dataIndex : 'blacklist',
						renderer : function(v) {
							if (1 == v) {
								return '可调度';
							} else if (2 == v) {
								return '不可调度';
							}
						}
					}, {
						header : '调派轮次(轮)',
						width : 100,
						dataIndex : 'assigncount'
					}, {
						header : '调派间隔(秒)',
						width : 100,
						dataIndex : 'assignmin'
					}, {
						header : '生效时间',
						width : 150,
						dataIndex : 'effecttime'
					}, {
						header : '设置时间',
						width : 150,
						dataIndex : 'createtime'
					}],
			dockedItems : [{
				xtype : 'toolbar',
				dock : 'top',
				items : [{
							xtype : "datetimefield",
							id : 'jsdd_searchstime',
							name : 'dialRule.searchstime',
							width : 230,
							editable:false,
							labelWidth : 60,
							fieldLabel : '设置时间'
						}, {
							xtype : "datetimefield",
							id : 'jsdd_searchetime',
							width : 190,
							editable:false,
							labelWidth : 20,
							name : 'dialRule.searchetime',
							fieldLabel : '到'
						}, {
							xtype: 'button',
							text : '查询',
							tooltip : '查询调度规则',
							iconCls : 'common-search-icon',
							action : 'search'
						}, {
							xtype: 'button',
							text : '重置',
							tooltip : '清空查询条件',
							iconCls : 'common-reset-icon',
							handler : function(button) {
								Ext.getCmp('jsdd_searchstime').setValue('');
								Ext.getCmp('jsdd_searchetime').setValue('');
							}
						}]
			}],
			bbar : {
				xtype : 'pagingtoolbar',
				store : "DialRuleListStore",
				displayInfo : true,
				displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
				emptyMsg : "没有数据"
			}
		});
