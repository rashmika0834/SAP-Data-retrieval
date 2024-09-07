/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialBomItem } from './MaterialBomItem';
import { MaterialBomItemRequestBuilder } from './MaterialBomItemRequestBuilder';
import { BomItemCategoryApi } from './BomItemCategoryApi';
import { MbomItmObjDpnAssignmentApi } from './MbomItmObjDpnAssignmentApi';
import { MaterialBomSubItemApi } from './MaterialBomSubItemApi';
import { MaterialBomApi } from './MaterialBomApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class MaterialBomItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaterialBomItem<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MaterialBomItemApi<DeSerializersT> {
    return new MaterialBomItemApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBomItemCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BOM_ITEM_CATEGORY: OneToOneLink<
      MaterialBomItem<DeSerializersT>,
      DeSerializersT,
      BomItemCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBomItmObjDependencyAssignment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BOM_ITM_OBJ_DEPENDENCY_ASSIGNMENT: Link<
      MaterialBomItem<DeSerializersT>,
      DeSerializersT,
      MbomItmObjDpnAssignmentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBomSubItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BOM_SUB_ITEMS: Link<
      MaterialBomItem<DeSerializersT>,
      DeSerializersT,
      MaterialBomSubItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterial} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL: OneToOneLink<
      MaterialBomItem<DeSerializersT>,
      DeSerializersT,
      MaterialBomApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BomItemCategoryApi<DeSerializersT>,
      MbomItmObjDpnAssignmentApi<DeSerializersT>,
      MaterialBomSubItemApi<DeSerializersT>,
      MaterialBomApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BOM_ITEM_CATEGORY: new OneToOneLink(
        'to_BOMItemCategory',
        this,
        linkedApis[0]
      ),
      TO_BOM_ITM_OBJ_DEPENDENCY_ASSIGNMENT: new Link(
        'to_BOMItmObjDependencyAssignment',
        this,
        linkedApis[1]
      ),
      TO_BOM_SUB_ITEMS: new Link('to_BOMSubItems', this, linkedApis[2]),
      TO_BILL_OF_MATERIAL: new OneToOneLink(
        'to_BillOfMaterial',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = MaterialBomItem;

  requestBuilder(): MaterialBomItemRequestBuilder<DeSerializersT> {
    return new MaterialBomItemRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaterialBomItem<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MaterialBomItem<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MaterialBomItem<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MaterialBomItem, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaterialBomItem,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONVERT_ITEM_AC: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DELETE_BOM_ITEM_WITH_ECN_AC: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    UPDATE_BOM_ITEM_WITH_ECN_AC: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DELETE_MC: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    UPDATE_MC: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    TO_BOM_ITM_OBJ_DEPENDENCY_ASSIGNMENT_OC: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    TO_BOM_SUB_ITEMS_OC: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BILL_OF_MATERIAL: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_CATEGORY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VARIANT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VERSION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_ITEM_NODE_NUMBER: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_CHANGE_DOCUMENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_ITEM_UUID: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BILL_OF_MATERIAL_HEADER_UUID: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BOM_ITEM_INTERNAL_CHANGE_COUNT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ENGINEERING_CHANGE_DOC_FOR_EDIT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_CHANGE_DOCUMENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHG_TO_ENGINEERING_CHG_DOCUMENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INHERITED_NODE_NUMBER_FOR_BOM_ITEM: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_ITEM_RECORD_CREATION_DATE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BOM_ITEM_CREATED_BY_USER: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_ITEM_LAST_CHANGE_DATE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BOM_ITEM_LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_COMPONENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_ITEM_CATEGORY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_ITEM_NUMBER: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_ITEM_UNIT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_ITEM_QUANTITY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    IS_ASSEMBLY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SUB_ITEM: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BOM_ITEM_SORTER: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_QUANTITY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BOM_ITEM_HAS_FIXED_QUANTITY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PURCHASING_GROUP: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_COMPONENT_PRICE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    IDENTIFIER_BOM_ITEM: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_PRICE_UNIT_QTY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    COMPONENT_SCRAP_IN_PERCENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    OPERATION_SCRAP_IN_PERCENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    IS_NET_SCRAP: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    NUMBER_OF_VARIABLE_SIZE_ITEM: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    QUANTITY_VARIABLE_SIZE_ITEM: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    FORMULA_KEY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPONENT_DESCRIPTION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_ITEM_DESCRIPTION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_ITEM_TEXT_2: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_GROUP: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TYPE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_NUMBER: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_VERSION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_PART: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_NUMBER: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_TYPE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESULTING_ITEM_CATEGORY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPENDENCY_OBJECT_NUMBER: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_TYPE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CLASSIFICATION_RELEVANT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_BULK_MATERIAL: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BOM_ITEM_IS_SPARE_PART: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_ITEM_IS_SALES_RELEVANT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCTION_RELEVANT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BOM_ITEM_IS_PLANT_MAINT_RELEVANT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BOM_ITEM_IS_COSTING_RELEVANT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ENGINEERING_RELEVANT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SPECIAL_PROCUREMENT_TYPE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BOM_RECURSIVE_ALLOWED: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    OPERATION_LEAD_TIME_OFFSET: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    OPS_LEAD_TIME_OFFSET_UNIT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MATERIAL_PROVISION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_IS_RECURSIVE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DOCUMENT_IS_CREATED_BY_CAD: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DISTR_KEY_COMP_CONSUMPTION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DURATION_IN_DAYS: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CREDITOR: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_ELEMENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE_1: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SIZE_2: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SIZE_3: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    UNIT_OF_MEASURE_FOR_SIZE_1_TO_3: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOODS_RECEIPT_DURATION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PURCHASING_ORGANIZATION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_COMPONENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MULTIPLE_SELECTION_ALLOWED: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PROD_ORDER_ISSUE_LOCATION: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_IS_CO_PRODUCT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    EXPLOSION_TYPE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_ITEM_GROUP: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_ITEM_PRIORITY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_ITEM_STRATEGY: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_PROBABILITY_PERCENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    FOLLOW_UP_GROUP: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCONTINUATION_GROUP: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CONFIGURABLE_BOM: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_POINT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAD_TIME_OFFSET: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCTION_SUPPLY_AREA: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_ALE: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_CHANGE_DATE_TIME: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PRELIMINARY_COMPONENT: OrderableEdmTypeField<
      MaterialBomItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBomItemCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BOM_ITEM_CATEGORY: OneToOneLink<
      MaterialBomItem<DeSerializersT>,
      DeSerializersT,
      BomItemCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBomItmObjDependencyAssignment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BOM_ITM_OBJ_DEPENDENCY_ASSIGNMENT: Link<
      MaterialBomItem<DeSerializersT>,
      DeSerializersT,
      MbomItmObjDpnAssignmentApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBomSubItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BOM_SUB_ITEMS: Link<
      MaterialBomItem<DeSerializersT>,
      DeSerializersT,
      MaterialBomSubItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterial} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL: OneToOneLink<
      MaterialBomItem<DeSerializersT>,
      DeSerializersT,
      MaterialBomApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaterialBomItem<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link convertItemAc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVERT_ITEM_AC: fieldBuilder.buildEdmTypeField(
          'ConvertItem_ac',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link deleteBomItemWithEcnAc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_BOM_ITEM_WITH_ECN_AC: fieldBuilder.buildEdmTypeField(
          'DeleteBOMItemWithECN_ac',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link updateBomItemWithEcnAc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_BOM_ITEM_WITH_ECN_AC: fieldBuilder.buildEdmTypeField(
          'UpdateBOMItemWithECN_ac',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link deleteMc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_MC: fieldBuilder.buildEdmTypeField(
          'Delete_mc',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link updateMc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_MC: fieldBuilder.buildEdmTypeField(
          'Update_mc',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link toBomItmObjDependencyAssignmentOc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BOM_ITM_OBJ_DEPENDENCY_ASSIGNMENT_OC: fieldBuilder.buildEdmTypeField(
          'to_BOMItmObjDependencyAssignment_oc',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link toBomSubItemsOc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BOM_SUB_ITEMS_OC: fieldBuilder.buildEdmTypeField(
          'to_BOMSubItems_oc',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL: fieldBuilder.buildEdmTypeField(
          'BillOfMaterial',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billOfMaterialCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billOfMaterialVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_VARIANT: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialVariant',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billOfMaterialVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_VERSION: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialVersion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billOfMaterialItemNodeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_NODE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemNodeNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link headerChangeDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_CHANGE_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'HeaderChangeDocument',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link material} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL: fieldBuilder.buildEdmTypeField(
          'Material',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
        /**
         * Static representation of the {@link billOfMaterialItemUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_UUID: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialHeaderUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_HEADER_UUID: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialHeaderUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link bomItemInternalChangeCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_INTERNAL_CHANGE_COUNT: fieldBuilder.buildEdmTypeField(
          'BOMItemInternalChangeCount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link validityEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link engineeringChangeDocForEdit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_DOC_FOR_EDIT: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeDocForEdit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineeringChangeDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chgToEngineeringChgDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHG_TO_ENGINEERING_CHG_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'ChgToEngineeringChgDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inheritedNodeNumberForBomItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INHERITED_NODE_NUMBER_FOR_BOM_ITEM: fieldBuilder.buildEdmTypeField(
          'InheritedNodeNumberForBOMItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomItemRecordCreationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_RECORD_CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'BOMItemRecordCreationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link bomItemCreatedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'BOMItemCreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomItemLastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'BOMItemLastChangeDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link bomItemLastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'BOMItemLastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_COMPONENT: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialComponent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialItemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialItemUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_UNIT: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialItemQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link isAssembly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ASSEMBLY: fieldBuilder.buildEdmTypeField(
          'IsAssembly',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSubItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUB_ITEM: fieldBuilder.buildEdmTypeField(
          'IsSubItem',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link bomItemSorter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_SORTER: fieldBuilder.buildEdmTypeField(
          'BOMItemSorter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FixedQuantity',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link bomItemHasFixedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_HAS_FIXED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BOMItemHasFixedQuantity',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link purchasingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_GROUP: fieldBuilder.buildEdmTypeField(
          'PurchasingGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialComponentPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_COMPONENT_PRICE: fieldBuilder.buildEdmTypeField(
          'MaterialComponentPrice',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link identifierBomItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFIER_BOM_ITEM: fieldBuilder.buildEdmTypeField(
          'IdentifierBOMItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialPriceUnitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_PRICE_UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'MaterialPriceUnitQty',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link componentScrapInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_SCRAP_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'ComponentScrapInPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link operationScrapInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_SCRAP_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'OperationScrapInPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link isNetScrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NET_SCRAP: fieldBuilder.buildEdmTypeField(
          'IsNetScrap',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link numberOfVariableSizeItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_VARIABLE_SIZE_ITEM: fieldBuilder.buildEdmTypeField(
          'NumberOfVariableSizeItem',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link quantityVariableSizeItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_VARIABLE_SIZE_ITEM: fieldBuilder.buildEdmTypeField(
          'QuantityVariableSizeItem',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link formulaKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_KEY: fieldBuilder.buildEdmTypeField(
          'FormulaKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link componentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ComponentDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BOMItemDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomItemText2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_TEXT_2: fieldBuilder.buildEdmTypeField(
          'BOMItemText2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_GROUP: fieldBuilder.buildEdmTypeField(
          'MaterialGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'DocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_VERSION: fieldBuilder.buildEdmTypeField(
          'DocumentVersion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentPart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_PART: fieldBuilder.buildEdmTypeField(
          'DocumentPart',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link classNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ClassNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link classType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_TYPE: fieldBuilder.buildEdmTypeField(
          'ClassType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resultingItemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESULTING_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ResultingItemCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dependencyObjectNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENCY_OBJECT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DependencyObjectNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link objectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'ObjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isClassificationRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CLASSIFICATION_RELEVANT: fieldBuilder.buildEdmTypeField(
          'IsClassificationRelevant',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isBulkMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BULK_MATERIAL: fieldBuilder.buildEdmTypeField(
          'IsBulkMaterial',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link bomItemIsSparePart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_IS_SPARE_PART: fieldBuilder.buildEdmTypeField(
          'BOMItemIsSparePart',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomItemIsSalesRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_IS_SALES_RELEVANT: fieldBuilder.buildEdmTypeField(
          'BOMItemIsSalesRelevant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProductionRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCTION_RELEVANT: fieldBuilder.buildEdmTypeField(
          'IsProductionRelevant',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link bomItemIsPlantMaintRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_IS_PLANT_MAINT_RELEVANT: fieldBuilder.buildEdmTypeField(
          'BOMItemIsPlantMaintRelevant',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link bomItemIsCostingRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_IS_COSTING_RELEVANT: fieldBuilder.buildEdmTypeField(
          'BOMItemIsCostingRelevant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isEngineeringRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENGINEERING_RELEVANT: fieldBuilder.buildEdmTypeField(
          'IsEngineeringRelevant',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link specialProcurementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'SpecialProcurementType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBomRecursiveAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BOM_RECURSIVE_ALLOWED: fieldBuilder.buildEdmTypeField(
          'IsBOMRecursiveAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link operationLeadTimeOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_LEAD_TIME_OFFSET: fieldBuilder.buildEdmTypeField(
          'OperationLeadTimeOffset',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link opsLeadTimeOffsetUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPS_LEAD_TIME_OFFSET_UNIT: fieldBuilder.buildEdmTypeField(
          'OpsLeadTimeOffsetUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMaterialProvision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MATERIAL_PROVISION: fieldBuilder.buildEdmTypeField(
          'IsMaterialProvision',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomIsRecursive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_IS_RECURSIVE: fieldBuilder.buildEdmTypeField(
          'BOMIsRecursive',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link documentIsCreatedByCad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_IS_CREATED_BY_CAD: fieldBuilder.buildEdmTypeField(
          'DocumentIsCreatedByCAD',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link distrKeyCompConsumption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTR_KEY_COMP_CONSUMPTION: fieldBuilder.buildEdmTypeField(
          'DistrKeyCompConsumption',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'DeliveryDurationInDays',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link creditor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDITOR: fieldBuilder.buildEdmTypeField(
          'Creditor',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costElement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT: fieldBuilder.buildEdmTypeField(
          'CostElement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link size1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_1: fieldBuilder.buildEdmTypeField('Size1', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link size2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_2: fieldBuilder.buildEdmTypeField('Size2', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link size3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_3: fieldBuilder.buildEdmTypeField('Size3', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link unitOfMeasureForSize1To3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_FOR_SIZE_1_TO_3: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasureForSize1To3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goodsReceiptDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_RECEIPT_DURATION: fieldBuilder.buildEdmTypeField(
          'GoodsReceiptDuration',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link purchasingOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'PurchasingOrganization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requiredComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_COMPONENT: fieldBuilder.buildEdmTypeField(
          'RequiredComponent',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link multipleSelectionAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE_SELECTION_ALLOWED: fieldBuilder.buildEdmTypeField(
          'MultipleSelectionAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link prodOrderIssueLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_ORDER_ISSUE_LOCATION: fieldBuilder.buildEdmTypeField(
          'ProdOrderIssueLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialIsCoProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_IS_CO_PRODUCT: fieldBuilder.buildEdmTypeField(
          'MaterialIsCoProduct',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link explosionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPLOSION_TYPE: fieldBuilder.buildEdmTypeField(
          'ExplosionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'AlternativeItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeItemPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_ITEM_PRIORITY: fieldBuilder.buildEdmTypeField(
          'AlternativeItemPriority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativeItemStrategy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_ITEM_STRATEGY: fieldBuilder.buildEdmTypeField(
          'AlternativeItemStrategy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usageProbabilityPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_PROBABILITY_PERCENT: fieldBuilder.buildEdmTypeField(
          'UsageProbabilityPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link followUpGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLLOW_UP_GROUP: fieldBuilder.buildEdmTypeField(
          'FollowUpGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discontinuationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCONTINUATION_GROUP: fieldBuilder.buildEdmTypeField(
          'DiscontinuationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isConfigurableBom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONFIGURABLE_BOM: fieldBuilder.buildEdmTypeField(
          'IsConfigurableBOM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referencePoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_POINT: fieldBuilder.buildEdmTypeField(
          'ReferencePoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leadTimeOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_TIME_OFFSET: fieldBuilder.buildEdmTypeField(
          'LeadTimeOffset',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productionSupplyArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SUPPLY_AREA: fieldBuilder.buildEdmTypeField(
          'ProductionSupplyArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETED: fieldBuilder.buildEdmTypeField(
          'IsDeleted',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isAle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALE: fieldBuilder.buildEdmTypeField('IsALE', 'Edm.Boolean', true),
        /**
         * Static representation of the {@link lastChangeDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastChangeDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link preliminaryComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRELIMINARY_COMPONENT: fieldBuilder.buildEdmTypeField(
          'PreliminaryComponent',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaterialBomItem)
      };
    }

    return this._schema;
  }
}
