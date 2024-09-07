/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BomItemCategory } from './BomItemCategory';
import { BomItemCategoryRequestBuilder } from './BomItemCategoryRequestBuilder';
import { BomItemCategoryTextApi } from './BomItemCategoryTextApi';
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
export class BomItemCategoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BomItemCategory<DeSerializersT>, DeSerializersT>
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
  ): BomItemCategoryApi<DeSerializersT> {
    return new BomItemCategoryApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBomItemCategoryText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BOM_ITEM_CATEGORY_TEXT: OneToOneLink<
      BomItemCategory<DeSerializersT>,
      DeSerializersT,
      BomItemCategoryTextApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BomItemCategoryTextApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_BOM_ITEM_CATEGORY_TEXT: new OneToOneLink(
        'to_BOMItemCategoryText',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BomItemCategory;

  requestBuilder(): BomItemCategoryRequestBuilder<DeSerializersT> {
    return new BomItemCategoryRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BomItemCategory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BomItemCategory<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BomItemCategory<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BomItemCategory, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BomItemCategory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BILL_OF_MATERIAL_ITEM_CATEGORY: OrderableEdmTypeField<
      BomItemCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_ITEM_CATEGORY: OrderableEdmTypeField<
      BomItemCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_OF_MATERIAL_ITEM_CATEGORY_DESC: OrderableEdmTypeField<
      BomItemCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBomItemCategoryText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BOM_ITEM_CATEGORY_TEXT: OneToOneLink<
      BomItemCategory<DeSerializersT>,
      DeSerializersT,
      BomItemCategoryTextApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BomItemCategory<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link billOfMaterialItemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fixedItemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'FixedItemCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billOfMaterialItemCategoryDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_CATEGORY_DESC: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemCategoryDesc',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BomItemCategory)
      };
    }

    return this._schema;
  }
}
