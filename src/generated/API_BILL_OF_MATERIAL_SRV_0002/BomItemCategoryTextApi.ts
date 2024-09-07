/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BomItemCategoryText } from './BomItemCategoryText';
import { BomItemCategoryTextRequestBuilder } from './BomItemCategoryTextRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class BomItemCategoryTextApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BomItemCategoryText<DeSerializersT>, DeSerializersT>
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
  ): BomItemCategoryTextApi<DeSerializersT> {
    return new BomItemCategoryTextApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BomItemCategoryText;

  requestBuilder(): BomItemCategoryTextRequestBuilder<DeSerializersT> {
    return new BomItemCategoryTextRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BomItemCategoryText<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BomItemCategoryText<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BomItemCategoryText<DeSerializersT>,
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
    typeof BomItemCategoryText,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BomItemCategoryText,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LANGUAGE: OrderableEdmTypeField<
      BomItemCategoryText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_ITEM_CATEGORY: OrderableEdmTypeField<
      BomItemCategoryText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_ITEM_CATEGORY_DESC: OrderableEdmTypeField<
      BomItemCategoryText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BomItemCategoryText<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          false
        ),
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
        ALL_FIELDS: new AllFields('*', BomItemCategoryText)
      };
    }

    return this._schema;
  }
}
