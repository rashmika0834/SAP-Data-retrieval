/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * DBomdelchangenooutparameter
 */
export interface DBomdelchangenooutparameter<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Boolean Variable (X = True, - = False, Space = Unknown).
   * @nullable
   */
  bomIsSuccessfulDeleted?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
}

/**
 * DBomdelchangenooutparameterField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DBomdelchangenooutparameterField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DBomdelchangenooutparameter,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DBomdelchangenooutparameter.bomIsSuccessfulDeleted} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bomIsSuccessfulDeleted: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BOMIsSuccessfulDeleted',
    'Edm.Boolean',
    true
  );

  /**
   * Creates an instance of DBomdelchangenooutparameterField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      DBomdelchangenooutparameter,
      fieldOptions
    );
  }
}

export namespace DBomdelchangenooutparameter {
  /**
   * Metadata information on all properties of the `DBomdelchangenooutparameter` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DBomdelchangenooutparameter>[] =
    [
      {
        originalName: 'BOMIsSuccessfulDeleted',
        name: 'bomIsSuccessfulDeleted',
        type: 'Edm.Boolean',
        isCollection: false
      }
    ];
}
