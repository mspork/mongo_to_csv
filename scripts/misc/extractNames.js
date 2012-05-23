load("./scripts/libs/jsonpath-0.8.0.js");

var json = 
[
  {
    "op": "avalon/setMap",
    "description": "Update Avalon mapping",
    "map": {
      "model": "app.opportunity",
      "children": [
        {
          "isNested": false,
          "isLink": false,
          "property": "commitLevel",
          "datatype": "app.lookup",
          "type": {
            "model": "app.lookup",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_commitlevelname",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.new_resolutiondate",
            "expr": "\"value\""
          },
          "property": "resolutionDate",
          "datatype": "date",
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.new_earliestexistingenddate",
            "expr": "\"value\""
          },
          "property": "targetDate",
          "datatype": "date",
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Asset.new_clientbatchquartername",
            "expr": "\"value\""
          },
          "isMaster": true,
          "property": "batchQuarter",
          "datatype": "string",
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "isMaster": true,
          "property": "clientRegion",
          "datatype": "app.lookup",
          "type": {
            "model": "app.lookup",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_clientregionname",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              }
            ]
          },
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "isMaster": true,
          "property": "clientTerritory",
          "datatype": "app.lookup",
          "type": {
            "model": "app.lookup",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_clientterritoryname",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              }
            ]
          },
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "isMaster": true,
          "property": "clientTheatre",
          "datatype": "app.lookup",
          "type": {
            "model": "app.lookup",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_clienttheatrename",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              }
            ]
          },
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "isMaster": true,
          "property": "directChannel",
          "datatype": "app.lookup",
          "type": {
            "model": "app.lookup",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_directchannelname",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              }
            ]
          },
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "isMaster": true,
          "property": "businessLine",
          "datatype": "app.lookup",
          "type": {
            "model": "app.lookup",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_ssibusinesslinename",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              }
            ]
          },
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "isMaster": true,
          "property": "resultReason",
          "datatype": "app.lookup",
          "type": {
            "model": "app.lookup",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Asset.new_ssiresultreasonname",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              }
            ]
          },
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "isMaster": true,
          "property": "country",
          "datatype": "core.lookup",
          "type": {
            "model": "core.lookup",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_countryname",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              }
            ]
          },
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.new_earliestnewstartdate",
            "expr": "\"value\""
          },
          "isMaster": true,
          "property": "earliestNewStartDate",
          "datatype": "date",
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.new_latestnewenddate",
            "expr": "\"value\""
          },
          "isMaster": true,
          "property": "latestNewEndDate",
          "datatype": "date",
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "property": "amount",
          "datatype": "core.currency",
          "type": {
            "model": "core.currency",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.amount",
                  "expr": "\"value\""
                },
                "property": "amount",
                "datatype": "currency",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "code",
                "datatype": "core.lookup",
                "type": {
                  "model": "core.lookup",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Asset.new_localtransactioncurrencyname",
                        "expr": "value"
                      },
                      "property": "name",
                      "datatype": "string",
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "property": "previousAmount",
          "datatype": "core.currency",
          "type": {
            "model": "core.currency",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_localrenewalamount",
                  "expr": "\"value\""
                },
                "property": "amount",
                "datatype": "currency",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "code",
                "datatype": "core.lookup",
                "type": {
                  "model": "core.lookup",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Opportunity.new_localrenewalcurrencyname",
                        "expr": "value"
                      },
                      "property": "name",
                      "datatype": "string",
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "(Expression)",
            "expr": "grel:\"migration\""
          },
          "property": "keywords",
          "datatype": "keywords",
          "isArray": true
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.opportunityid",
            "expr": "\"value\""
          },
          "isMaster": false,
          "property": "migration_crmid",
          "datatype": "string",
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Asset.new_existingcontractnumber",
            "expr": "\"value\""
          },
          "isMaster": true,
          "property": "contractNumber",
          "datatype": "string",
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.name",
            "expr": "\"value\""
          },
          "property": "displayName",
          "datatype": "string",
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "property": "targetAmount",
          "datatype": "core.currency",
          "type": {
            "model": "core.currency",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_localrenewalamount",
                  "expr": "\"value\""
                },
                "property": "amount",
                "datatype": "currency",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "code",
                "datatype": "core.lookup",
                "type": {
                  "model": "core.lookup",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Opportunity.new_localrenewalcurrencyname",
                        "expr": "value"
                      },
                      "property": "name",
                      "datatype": "string",
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": true,
          "property": "salesRep",
          "datatype": "core.contact/person",
          "type": {
            "model": "core.contact/person",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:cells[\"Opportunity.owneridname\"].value.split(\" \")[0]"
                },
                "property": "firstName",
                "datatype": "string",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:cells[\"Opportunity.owneridname\"].value.split(\" \")[1]"
                },
                "property": "lastName",
                "datatype": "string",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"migration\""
                },
                "property": "keywords",
                "datatype": "keywords",
                "isArray": true
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": true,
          "property": "customer",
          "datatype": "core.contact/organization",
          "type": {
            "model": "core.contact/organization",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Company.name",
                  "expr": "\"value\""
                },
                "property": "name",
                "datatype": "string",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Company.accountid",
                  "expr": "\"value\""
                },
                "isMaster": false,
                "property": "migration_crmid",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              },
              {
                "isNested": true,
                "isLink": true,
                "property": "primaryContact",
                "datatype": "core.contact/person",
                "type": {
                  "model": "core.contact/person",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Contact.firstname",
                        "expr": "\"value\""
                      },
                      "property": "firstName",
                      "datatype": "string",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Contact.lastname",
                        "expr": "\"value\""
                      },
                      "property": "lastName",
                      "datatype": "string",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "contactNumbers",
                      "datatype": "core.telecom",
                      "type": {
                        "model": "core.telecom",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Contact.telephone1",
                              "expr": "\"value\""
                            },
                            "property": "tNumber",
                            "datatype": "string",
                            "isArray": false
                          },
                          {
                            "isNested": false,
                            "isLink": false,
                            "property": "telecomType",
                            "datatype": "core.lookup",
                            "type": {
                              "model": "core.lookup",
                              "children": [
                                {
                                  "isNested": false,
                                  "isLink": false,
                                  "column": {
                                    "name": "(Expression)",
                                    "expr": "grel:\"primary\""
                                  },
                                  "property": "name",
                                  "datatype": "string",
                                  "isArray": false
                                }
                              ]
                            },
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": true
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "emailAddresses",
                      "datatype": "core.email",
                      "type": {
                        "model": "core.email",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Contact.emailaddress1",
                              "expr": "\"value\""
                            },
                            "property": "address",
                            "datatype": "string",
                            "isArray": false
                          },
                          {
                            "isNested": false,
                            "isLink": false,
                            "property": "emailType",
                            "datatype": "core.lookup",
                            "type": {
                              "model": "core.lookup",
                              "children": [
                                {
                                  "isNested": false,
                                  "isLink": false,
                                  "column": {
                                    "name": "(Expression)",
                                    "expr": "grel:\"business\""
                                  },
                                  "property": "name",
                                  "datatype": "string",
                                  "isArray": false
                                }
                              ]
                            },
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": true
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"migration\""
                },
                "property": "keywords",
                "datatype": "keywords",
                "isArray": true
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": true,
          "property": "offer",
          "datatype": "app.offer",
          "type": {
            "model": "app.offer",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:cells[\"Asset.new_existingcontractnumber\"].value + \" - \" + cells[\"Asset.new_clientbatchquartername\"].value"
                },
                "property": "displayName",
                "datatype": "string",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Asset.new_newstartdate",
                  "expr": "\"value\""
                },
                "property": "startDate",
                "datatype": "date",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Asset.new_newenddate",
                  "expr": "\"value\""
                },
                "property": "endDate",
                "datatype": "date",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Asset.new_newenddate",
                  "expr": "\"value\""
                },
                "property": "targetDate",
                "datatype": "date",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "amount",
                "datatype": "core.currency",
                "type": {
                  "model": "core.currency",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Asset.new_localtransactionamount",
                        "expr": "\"value\""
                      },
                      "property": "amount",
                      "datatype": "currency",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "code",
                      "datatype": "core.lookup",
                      "type": {
                        "model": "core.lookup",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Asset.new_localtransactioncurrencyname",
                              "expr": "value"
                            },
                            "property": "name",
                            "datatype": "string",
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "targetAmount",
                "datatype": "core.currency",
                "type": {
                  "model": "core.currency",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Asset.new_localrenewalamount",
                        "expr": "\"value\""
                      },
                      "property": "amount",
                      "datatype": "currency",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "code",
                      "datatype": "core.lookup",
                      "type": {
                        "model": "core.lookup",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Asset.new_localrenewalcurrencyname",
                              "expr": "value"
                            },
                            "property": "name",
                            "datatype": "string",
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "previousAmount",
                "datatype": "core.currency",
                "type": {
                  "model": "core.currency",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Asset.new_localrenewalamount",
                        "expr": "\"value\""
                      },
                      "property": "amount",
                      "datatype": "currency",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "code",
                      "datatype": "core.lookup",
                      "type": {
                        "model": "core.lookup",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Asset.new_localrenewalcurrencyname",
                              "expr": "value"
                            },
                            "property": "name",
                            "datatype": "string",
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_resolutiondate",
                  "expr": "\"value\""
                },
                "property": "resolutionDate",
                "datatype": "date",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "result",
                "datatype": "app.lookup",
                "type": {
                  "model": "app.lookup",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "(Expression)",
                        "expr": "grel:if(cells[\"Opportunity.new_ssisalesstagename\"].value == \"Closed Sale\", \"win\",if(cells[\"Opportunity.new_ssisalesstagename\"].value == \"No Service\", \"lose\",if(cells[\"Opportunity.new_ssisalesstagename\"].value == \"House Account\", \"houseAccout\",blank)))"
                      },
                      "property": "name",
                      "datatype": "string",
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "resultReason",
                "datatype": "app.lookup",
                "type": {
                  "model": "app.lookup",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Avalon Result Reason",
                        "expr": "\"value\""
                      },
                      "property": "name",
                      "datatype": "string",
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": true,
                "property": "product",
                "datatype": "app.product",
                "type": {
                  "model": "app.product",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Asset.new_existingserviceproduct",
                        "expr": "\"value\""
                      },
                      "property": "displayName",
                      "datatype": "string",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Asset.new_existingserviceproduct",
                        "expr": "\"value\""
                      },
                      "property": "description",
                      "datatype": "string",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "(Expression)",
                        "expr": "grel:\"migration\""
                      },
                      "property": "keywords",
                      "datatype": "keywords",
                      "isArray": true
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": true,
                "property": "predecessor",
                "datatype": "app.asset/service",
                "type": {
                  "model": "app.asset/service",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "(Expression)",
                        "expr": "grel:cells[\"Asset.new_existingcontractnumber\"].value + \" - \" +\"Q\" + cells[\"Avalon Previous Qtr\"].value + \" \" +\ndatePart(cells[\"Asset.new_existingstartdate\"].value, \"year\")"
                      },
                      "property": "displayName",
                      "datatype": "string",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "amount",
                      "datatype": "core.currency",
                      "type": {
                        "model": "core.currency",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Asset.new_localrenewalamount",
                              "expr": "\"value\""
                            },
                            "property": "amount",
                            "datatype": "currency",
                            "isArray": false
                          },
                          {
                            "isNested": false,
                            "isLink": false,
                            "property": "code",
                            "datatype": "core.lookup",
                            "type": {
                              "model": "core.lookup",
                              "children": [
                                {
                                  "isNested": false,
                                  "isLink": false,
                                  "column": {
                                    "name": "Asset.new_localrenewalcurrencyname",
                                    "expr": "value"
                                  },
                                  "property": "name",
                                  "datatype": "string",
                                  "isArray": false
                                }
                              ]
                            },
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Asset.new_existingstartdate",
                        "expr": "\"value\""
                      },
                      "property": "startDate",
                      "datatype": "date",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Asset.new_existingenddate",
                        "expr": "\"value\""
                      },
                      "property": "endDate",
                      "datatype": "date",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "(Expression)",
                        "expr": "grel:\"migration\""
                      },
                      "property": "keywords",
                      "datatype": "keywords",
                      "isArray": true
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"migration\""
                },
                "property": "keywords",
                "datatype": "keywords",
                "isArray": true
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": true,
          "property": "primaryQuote",
          "datatype": "app.quote",
          "type": {
            "model": "app.quote",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Quote.new_ssiquotenumber",
                  "expr": "\"value\""
                },
                "property": "displayName",
                "datatype": "string",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "amount",
                "datatype": "core.currency",
                "type": {
                  "model": "core.currency",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Quote.new_localtransactionamount",
                        "expr": "\"value\""
                      },
                      "property": "amount",
                      "datatype": "currency",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "code",
                      "datatype": "core.lookup",
                      "type": {
                        "model": "core.lookup",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Quote.new_localtransactioncurrencyname",
                              "expr": "value"
                            },
                            "property": "name",
                            "datatype": "string",
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Quote.new_quoterecordid",
                  "expr": "\"value\""
                },
                "isMaster": false,
                "property": "migration_crmid",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"migration\""
                },
                "property": "keywords",
                "datatype": "keywords",
                "isArray": true
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"booked\""
                },
                "isMaster": true,
                "property": "migrationQuoteStage",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Asset.new_existingcontractnumber",
                  "expr": "\"value\""
                },
                "isMaster": true,
                "property": "contractNumber",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": true,
          "property": "quote",
          "datatype": "app.quote",
          "type": {
            "model": "app.quote",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Quote.new_ssiquotenumber",
                  "expr": "\"value\""
                },
                "property": "displayName",
                "datatype": "string",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "amount",
                "datatype": "core.currency",
                "type": {
                  "model": "core.currency",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Quote.new_localtransactionamount",
                        "expr": "\"value\""
                      },
                      "property": "amount",
                      "datatype": "currency",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "code",
                      "datatype": "core.lookup",
                      "type": {
                        "model": "core.lookup",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Quote.new_localtransactioncurrencyname",
                              "expr": "value"
                            },
                            "property": "name",
                            "datatype": "string",
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"migration\""
                },
                "property": "keywords",
                "datatype": "keywords",
                "isArray": true
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"booked\""
                },
                "isMaster": true,
                "property": "migrationQuoteStage",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Quote.new_quoterecordid",
                  "expr": "\"value\""
                },
                "isMaster": false,
                "property": "migration_crmid",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Asset.new_existingcontractnumber",
                  "expr": "\"value\""
                },
                "isMaster": true,
                "property": "contractNumber",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": true,
          "property": "booking",
          "datatype": "app.booking",
          "type": {
            "model": "app.booking",
            "children": [
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_newponumber",
                  "expr": "\"value\""
                },
                "property": "poNumber",
                "datatype": "string",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "poAmount",
                "datatype": "core.currency",
                "type": {
                  "model": "core.currency",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Quote.new_localtransactionamount",
                        "expr": "\"value\""
                      },
                      "property": "amount",
                      "datatype": "currency",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "code",
                      "datatype": "core.lookup",
                      "type": {
                        "model": "core.lookup",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Quote.new_localtransactioncurrencyname",
                              "expr": "value"
                            },
                            "property": "name",
                            "datatype": "string",
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "soAmount",
                "datatype": "core.currency",
                "type": {
                  "model": "core.currency",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Quote.new_localtransactionamount",
                        "expr": "\"value\""
                      },
                      "property": "amount",
                      "datatype": "currency",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "code",
                      "datatype": "core.lookup",
                      "type": {
                        "model": "core.lookup",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Quote.new_localtransactioncurrencyname",
                              "expr": "value"
                            },
                            "property": "name",
                            "datatype": "string",
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Quote.new_quotetypename",
                  "expr": "\"value\""
                },
                "property": "description",
                "datatype": "string",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_ssibookingdate",
                  "expr": "\"value\""
                },
                "property": "soDate",
                "datatype": "date",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Opportunity.new_ssibookingdate",
                  "expr": "\"value\""
                },
                "property": "poDate",
                "datatype": "date",
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "property": "amount",
                "datatype": "core.currency",
                "type": {
                  "model": "core.currency",
                  "children": [
                    {
                      "isNested": false,
                      "isLink": false,
                      "column": {
                        "name": "Quote.new_localtransactionamount",
                        "expr": "\"value\""
                      },
                      "property": "amount",
                      "datatype": "currency",
                      "isArray": false
                    },
                    {
                      "isNested": false,
                      "isLink": false,
                      "property": "code",
                      "datatype": "core.lookup",
                      "type": {
                        "model": "core.lookup",
                        "children": [
                          {
                            "isNested": false,
                            "isLink": false,
                            "column": {
                              "name": "Quote.new_localtransactioncurrencyname",
                              "expr": "value"
                            },
                            "property": "name",
                            "datatype": "string",
                            "isArray": false
                          }
                        ]
                      },
                      "isArray": false
                    }
                  ]
                },
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"migration\""
                },
                "property": "keywords",
                "datatype": "keywords",
                "isArray": true
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "Asset.new_existingcontractnumber",
                  "expr": "\"value\""
                },
                "isMaster": true,
                "property": "contractNumber",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              },
              {
                "isNested": false,
                "isLink": false,
                "column": {
                  "name": "(Expression)",
                  "expr": "grel:\"completed\""
                },
                "isMaster": true,
                "property": "migrationBookingStage",
                "datatype": "string",
                "isExtension": true,
                "isArray": false
              }
            ]
          },
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.new_ssisalesstagename",
            "expr": "value"
          },
          "isMaster": true,
          "property": "migrationSalesStage",
          "datatype": "string",
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.new_firstcontactdate",
            "expr": "value"
          },
          "isMaster": true,
          "property": "migrationContactedDate",
          "datatype": "date",
          "isExtension": true,
          "isArray": false
        },
        {
          "isNested": false,
          "isLink": false,
          "column": {
            "name": "Opportunity.new_firstquotedate",
            "expr": "value"
          },
          "isMaster": true,
          "property": "migrationQuotedDate",
          "datatype": "date",
          "isExtension": true,
          "isArray": false
        }
      ]
    }
  }
]
