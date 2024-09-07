/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillOfMaterialUsage } from './BillOfMaterialUsage';
import { BillOfMaterialUsageRequestBuilder } from './BillOfMaterialUsageRequestBuilder';
import { BillOfMaterialUsageTextApi } from './BillOfMaterialUsageTextApi';
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
export class BillOfMaterialUsageApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BillOfMaterialUsage<DeSerializersT>, DeSerializersT>
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
  ): BillOfMaterialUsageApi<DeSerializersT> {
    return new BillOfMaterialUsageApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterialUsageText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_USAGE_TEXT: OneToOneLink<
      BillOfMaterialUsage<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialUsageTextApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BillOfMaterialUsageTextApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_BILL_OF_MATERIAL_USAGE_TEXT: new OneToOneLink(
        'to_BillOfMaterialUsageText',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BillOfMaterialUsage;

  requestBuilder(): BillOfMaterialUsageRequestBuilder<DeSerializersT> {
    return new BillOfMaterialUsageRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BillOfMaterialUsage<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BillOfMaterialUsage<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BillOfMaterialUsage<DeSerializersT>,
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
    typeof BillOfMaterialUsage,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BillOfMaterialUsage,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BILL_OF_MATERIAL_VARIANT_USAGE: OrderableEdmTypeField<
      BillOfMaterialUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VARIANT_USAGE_DESC: OrderableEdmTypeField<
      BillOfMaterialUsage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterialUsageText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_USAGE_TEXT: OneToOneLink<
      BillOfMaterialUsage<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialUsageTextApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BillOfMaterialUsage<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link billOfMaterialVariantUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_VARIANT_USAGE: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialVariantUsage',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billOfMaterialVariantUsageDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_VARIANT_USAGE_DESC: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialVariantUsageDesc',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BillOfMaterialUsage)
      };
    }

    return this._schema;
  }
}
