define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "ae1b660a-9dcc-4caf-9b51-b5d9db075f1a",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_nenpe0i_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "settings-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_h180gqx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_iyoxebf",
					"labelPosition": "auto",
					"control": "$NumberAttribute_iyoxebf"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_qt73v4u",
					"labelPosition": "auto",
					"control": "$NumberAttribute_qt73v4u"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrComession",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrComession",
					"control": "$UsrOfferTypeUsrComession",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_u21i4fm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_72zf86j",
					"labelPosition": "auto",
					"control": "$NumberAttribute_72zf86j",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_whw3mnd",
					"labelPosition": "auto",
					"control": "$LookupAttribute_whw3mnd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ip9axq6",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ip9axq6",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_zlllq7y",
					"labelPosition": "auto",
					"control": "$StringAttribute_zlllq7y",
					"multiline": false,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_m4zimx5",
					"labelPosition": "auto",
					"control": "$LookupAttribute_m4zimx5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_mx23fwc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mx23fwc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCountry",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_v0t4m3o",
					"labelPosition": "auto",
					"control": "$LookupAttribute_v0t4m3o",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_bjhqqt9",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_bjhqqt9_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCountry",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCity",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_dqjdgoc",
					"labelPosition": "auto",
					"control": "$LookupAttribute_dqjdgoc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_w9rue54",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_w9rue54_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCity",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_4k5uezy",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_4k5uezy_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_xvf6ljw",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_4k5uezy",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_73kxsxa",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_xvf6ljw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_wx6tg9p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_wx6tg9p_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_73kxsxa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_i4nudlj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_i4nudlj_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_1ycbxanDS"
						}
					}
				},
				"parentName": "FlexContainer_73kxsxa",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_9vj41o1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_9vj41o1_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_73kxsxa",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_9mp51xb",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_9mp51xb_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_1ycbxan"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9vj41o1",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_z4ccost",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_z4ccost_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9vj41o1",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_9sfs8sm",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_9sfs8sm_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_1ycbxan"
					]
				},
				"parentName": "FlexContainer_73kxsxa",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_vx2rnzq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_4k5uezy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"selectedRows": "$GridDetail_1ycbxan_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "GridDetail_1ycbxan_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_1ycbxan",
					"primaryColumnName": "GridDetail_1ycbxanDS_Id",
					"columns": [
						{
							"id": "a2cf8962-df61-ab00-1f86-df95d40b9985",
							"code": "GridDetail_1ycbxanDS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_1ycbxanDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "77098a37-8de4-466b-4928-1e241d32beab",
							"code": "GridDetail_1ycbxanDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_1ycbxanDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "e1c86852-cd35-10f2-a9e0-fa5496cbb66e",
							"code": "GridDetail_1ycbxanDS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_1ycbxanDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "70edea62-0cc3-ce90-664e-7b1a36b46585",
							"code": "GridDetail_1ycbxanDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_1ycbxanDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_vx2rnzq",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"NumberAttribute_iyoxebf": {
					"modelConfig": {
						"path": "PDS.UsrPriceUSD"
					}
				},
				"NumberAttribute_qt73v4u": {
					"modelConfig": {
						"path": "PDS.UsrArea"
					}
				},
				"LookupAttribute_whw3mnd": {
					"modelConfig": {
						"path": "PDS.UsrType"
					}
				},
				"LookupAttribute_ip9axq6": {
					"modelConfig": {
						"path": "PDS.UsrOfferType"
					}
				},
				"StringAttribute_zlllq7y": {
					"modelConfig": {
						"path": "PDS.UsrComment"
					}
				},
				"LookupAttribute_m4zimx5": {
					"modelConfig": {
						"path": "PDS.UsrManager"
					}
				},
				"LookupAttribute_v0t4m3o": {
					"modelConfig": {
						"path": "PDS.UsrCountry"
					}
				},
				"LookupAttribute_dqjdgoc": {
					"modelConfig": {
						"path": "PDS.UsrCity"
					}
				},
				"NumberAttribute_72zf86j": {
					"modelConfig": {
						"path": "PDS.UsrComission"
					}
				},
				"UsrOfferTypeUsrComession": {
					"modelConfig": {
						"path": "PDS.UsrOfferTypeUsrComession"
					}
				},
				"GridDetail_1ycbxan": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_1ycbxanDS",
						"sortingConfig": {
							"default": [
								{
									"direction": "asc",
									"columnName": "UsrComment"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_1ycbxanDS_UsrVisitDateTime": {
								"modelConfig": {
									"path": "GridDetail_1ycbxanDS.UsrVisitDateTime"
								}
							},
							"GridDetail_1ycbxanDS_UsrPotentialCustomer": {
								"modelConfig": {
									"path": "GridDetail_1ycbxanDS.UsrPotentialCustomer"
								}
							},
							"GridDetail_1ycbxanDS_UsrComment": {
								"modelConfig": {
									"path": "GridDetail_1ycbxanDS.UsrComment"
								}
							},
							"GridDetail_1ycbxanDS_CreatedOn": {
								"modelConfig": {
									"path": "GridDetail_1ycbxanDS.CreatedOn"
								}
							},
							"GridDetail_1ycbxanDS_Id": {
								"modelConfig": {
									"path": "GridDetail_1ycbxanDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrRealtyFreedomUI",
						"attributes": {
							"UsrOfferTypeUsrComession": {
								"path": "UsrOfferType.UsrComession",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_1ycbxanDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrRealtyVisitFreedomUI",
						"attributes": {
							"UsrVisitDateTime": {
								"path": "UsrVisitDateTime"
							},
							"UsrPotentialCustomer": {
								"path": "UsrPotentialCustomer"
							},
							"UsrComment": {
								"path": "UsrComment"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_1ycbxanDS": [
					{
						"attributePath": "UsrParentRealty",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request : "usr.MyButtonRequest",
				handler: async (request, next) => {
					this.console.log("Button works ...");
					Terrasoft.showInformation("My button was pressed");
					var price = await request.$context.NumberAttribute_qt73v4u;
					this.console.log("Prcie: " + price);
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest", // it is custom that every field work every time
				/* The custom implementation of the base request handler. */
				handler: async (request, next) => {
					/* Check the request name. */
					if (request.attributeName === 'NumberAttribute_iyoxebf') { // if price changed or percent changed
						debugger;
						this.console.log("price " + request.$context.NumberAttribute_iyoxebf);
						var price = await request.$context.NumberAttribute_iyoxebf;
					
						var percent = await request.$context.NumberAttribute_72zf86j;
						var comission = price * percent/ 100;
						request.$context.NumberAttribute_72zf86j = comission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
    }

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});