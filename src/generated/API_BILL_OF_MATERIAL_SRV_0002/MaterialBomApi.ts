/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialBom } from './MaterialBom';
import { MaterialBomRequestBuilder } from './MaterialBomRequestBuilder';
import { MaterialBomItemApi } from './MaterialBomItemApi';
import { BillOfMaterialUsageApi } from './BillOfMaterialUsageApi';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class MaterialBomApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaterialBom<DeSerializersT>, DeSerializersT>
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
  ): MaterialBomApi<DeSerializersT> {
    return new MaterialBomApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toBillOfMaterialItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_ITEM: Link<
      MaterialBom<DeSerializersT>,
      DeSerializersT,
      MaterialBomItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterialUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_USAGE: OneToOneLink<
      MaterialBom<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialUsageApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaterialBomItemApi<DeSerializersT>,
      BillOfMaterialUsageApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BILL_OF_MATERIAL_ITEM: new Link(
        'to_BillOfMaterialItem',
        this,
        linkedApis[0]
      ),
      TO_BILL_OF_MATERIAL_USAGE: new OneToOneLink(
        'to_BillOfMaterialUsage',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = MaterialBom;

  requestBuilder(): MaterialBomRequestBuilder<DeSerializersT> {
    return new MaterialBomRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaterialBom<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MaterialBom<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MaterialBom<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MaterialBom, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(MaterialBom, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DELETE_BOM_HEADER_WITH_ECN_AC: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    RELEASE_VERSION_BOM_AC: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DELETE_MC: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    UPDATE_MC: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    TO_BILL_OF_MATERIAL_ITEM_OC: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BILL_OF_MATERIAL: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_CATEGORY: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VARIANT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VERSION: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_DOCUMENT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_HEADER_UUID: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BILL_OF_MATERIAL_VARIANT_USAGE: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_CHANGE_DOC_FOR_EDIT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MULTIPLE_BOM_ALT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BOM_HEADER_INTERNAL_CHANGE_COUNT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_USAGE_PRIORITY: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_AUTHSN_GRP: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_VERSION_STATUS: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VERSION_BILL_OF_MATERIAL: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_LATEST_BOM_VERSION: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_CONFIGURED_MATERIAL: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BOM_TECHNICAL_TYPE: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_GROUP: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_HEADER_TEXT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_ALTERNATIVE_TEXT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_STATUS: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_VALIDITY_START_DATE: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    HEADER_VALIDITY_END_DATE: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CHG_TO_ENGINEERING_CHG_DOCUMENT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_ALE: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MAT_FROM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MATERIAL_TO_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BOM_HEADER_BASE_UNIT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_HEADER_QUANTITY_IN_BASE_UNIT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    RECORD_CREATION_DATE: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_IS_TO_BE_DELETED: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_IS_CREATED_BY_CAD: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LABORATORY_OR_DESIGN_OFFICE: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE_TIME: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANT_NAME: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_HDR_DETAILS_TEXT: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SELECTED_BILL_OF_MATERIAL_VERSION: OrderableEdmTypeField<
      MaterialBom<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBillOfMaterialItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_ITEM: Link<
      MaterialBom<DeSerializersT>,
      DeSerializersT,
      MaterialBomItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterialUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_USAGE: OneToOneLink<
      MaterialBom<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialUsageApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaterialBom<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link deleteBomHeaderWithEcnAc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_BOM_HEADER_WITH_ECN_AC: fieldBuilder.buildEdmTypeField(
          'DeleteBOMHeaderWithECN_ac',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link releaseVersionBomAc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_VERSION_BOM_AC: fieldBuilder.buildEdmTypeField(
          'ReleaseVersionBOM_ac',
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
         * Static representation of the {@link toBillOfMaterialItemOc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BILL_OF_MATERIAL_ITEM_OC: fieldBuilder.buildEdmTypeField(
          'to_BillOfMaterialItem_oc',
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
         * Static representation of the {@link engineeringChangeDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeDocument',
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
         * Static representation of the {@link billOfMaterialHeaderUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_HEADER_UUID: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialHeaderUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialVariantUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_VARIANT_USAGE: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialVariantUsage',
          'Edm.String',
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
         * Static representation of the {@link isMultipleBomAlt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MULTIPLE_BOM_ALT: fieldBuilder.buildEdmTypeField(
          'IsMultipleBOMAlt',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link bomHeaderInternalChangeCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_HEADER_INTERNAL_CHANGE_COUNT: fieldBuilder.buildEdmTypeField(
          'BOMHeaderInternalChangeCount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomUsagePriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_USAGE_PRIORITY: fieldBuilder.buildEdmTypeField(
          'BOMUsagePriority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialAuthsnGrp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_AUTHSN_GRP: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialAuthsnGrp',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomVersionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_VERSION_STATUS: fieldBuilder.buildEdmTypeField(
          'BOMVersionStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isVersionBillOfMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VERSION_BILL_OF_MATERIAL: fieldBuilder.buildEdmTypeField(
          'IsVersionBillOfMaterial',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isLatestBomVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LATEST_BOM_VERSION: fieldBuilder.buildEdmTypeField(
          'IsLatestBOMVersion',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isConfiguredMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONFIGURED_MATERIAL: fieldBuilder.buildEdmTypeField(
          'IsConfiguredMaterial',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link bomTechnicalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_TECHNICAL_TYPE: fieldBuilder.buildEdmTypeField(
          'BOMTechnicalType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_GROUP: fieldBuilder.buildEdmTypeField(
          'BOMGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomHeaderText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_HEADER_TEXT: fieldBuilder.buildEdmTypeField(
          'BOMHeaderText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomAlternativeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ALTERNATIVE_TEXT: fieldBuilder.buildEdmTypeField(
          'BOMAlternativeText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_STATUS: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerValidityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'HeaderValidityStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link headerValidityEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField(
          'HeaderValidityEndDate',
          'Edm.DateTime',
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
         * Static representation of the {@link isMarkedForDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField(
          'IsMarkedForDeletion',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isAle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALE: fieldBuilder.buildEdmTypeField('IsALE', 'Edm.Boolean', true),
        /**
         * Static representation of the {@link matFromLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAT_FROM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MatFromLotSizeQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link materialToLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_TO_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaterialToLotSizeQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link bomHeaderBaseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_HEADER_BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'BOMHeaderBaseUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomHeaderQuantityInBaseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_HEADER_QUANTITY_IN_BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'BOMHeaderQuantityInBaseUnit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link recordCreationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'RecordCreationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomIsToBeDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_IS_TO_BE_DELETED: fieldBuilder.buildEdmTypeField(
          'BOMIsToBeDeleted',
          'Edm.String',
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
         * Static representation of the {@link laboratoryOrDesignOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABORATORY_OR_DESIGN_OFFICE: fieldBuilder.buildEdmTypeField(
          'LaboratoryOrDesignOffice',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plantName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT_NAME: fieldBuilder.buildEdmTypeField(
          'PlantName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialHdrDetailsText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_HDR_DETAILS_TEXT: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialHdrDetailsText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link selectedBillOfMaterialVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELECTED_BILL_OF_MATERIAL_VERSION: fieldBuilder.buildEdmTypeField(
          'SelectedBillOfMaterialVersion',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaterialBom)
      };
    }

    return this._schema;
  }
}
