/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialBomSubItem } from './MaterialBomSubItem';
import { MaterialBomSubItemRequestBuilder } from './MaterialBomSubItemRequestBuilder';
import { MaterialBomItemApi } from './MaterialBomItemApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class MaterialBomSubItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaterialBomSubItem<DeSerializersT>, DeSerializersT>
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
  ): MaterialBomSubItemApi<DeSerializersT> {
    return new MaterialBomSubItemApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterialItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_ITEM: OneToOneLink<
      MaterialBomSubItem<DeSerializersT>,
      DeSerializersT,
      MaterialBomItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterial} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL: OneToOneLink<
      MaterialBomSubItem<DeSerializersT>,
      DeSerializersT,
      MaterialBomApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaterialBomItemApi<DeSerializersT>,
      MaterialBomApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BILL_OF_MATERIAL_ITEM: new OneToOneLink(
        'to_BillOfMaterialItem',
        this,
        linkedApis[0]
      ),
      TO_BILL_OF_MATERIAL: new OneToOneLink(
        'to_BillOfMaterial',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = MaterialBomSubItem;

  requestBuilder(): MaterialBomSubItemRequestBuilder<DeSerializersT> {
    return new MaterialBomSubItemRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaterialBomSubItem<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MaterialBomSubItem<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaterialBomSubItem<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MaterialBomSubItem,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaterialBomSubItem,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DELETE_MC: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    UPDATE_MC: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BILL_OF_MATERIAL: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_CATEGORY: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VARIANT: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VERSION: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_ITEM_NODE_NUMBER: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_CHANGE_DOCUMENT: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_ITEM_INTERNAL_CHANGE_COUNT: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_SUB_ITEM_NUMBER_VALUE: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_ITEM_UNIT: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_SUB_ITEM_QUANTITY: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BOM_SUB_ITEM_INSTALLATION_POINT: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_SUB_ITEM_TEXT: OrderableEdmTypeField<
      MaterialBomSubItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterialItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_ITEM: OneToOneLink<
      MaterialBomSubItem<DeSerializersT>,
      DeSerializersT,
      MaterialBomItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterial} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL: OneToOneLink<
      MaterialBomSubItem<DeSerializersT>,
      DeSerializersT,
      MaterialBomApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaterialBomSubItem<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link bomItemInternalChangeCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ITEM_INTERNAL_CHANGE_COUNT: fieldBuilder.buildEdmTypeField(
          'BOMItemInternalChangeCount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bomSubItemNumberValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_SUB_ITEM_NUMBER_VALUE: fieldBuilder.buildEdmTypeField(
          'BOMSubItemNumberValue',
          'Edm.String',
          false
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
         * Static representation of the {@link billOfMaterialSubItemQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_SUB_ITEM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialSubItemQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link bomSubItemInstallationPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_SUB_ITEM_INSTALLATION_POINT: fieldBuilder.buildEdmTypeField(
          'BOMSubItemInstallationPoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialSubItemText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_SUB_ITEM_TEXT: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialSubItemText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaterialBomSubItem)
      };
    }

    return this._schema;
  }
}
