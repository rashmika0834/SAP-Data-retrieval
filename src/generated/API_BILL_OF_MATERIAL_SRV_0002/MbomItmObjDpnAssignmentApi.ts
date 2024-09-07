/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MbomItmObjDpnAssignment } from './MbomItmObjDpnAssignment';
import { MbomItmObjDpnAssignmentRequestBuilder } from './MbomItmObjDpnAssignmentRequestBuilder';
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
export class MbomItmObjDpnAssignmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MbomItmObjDpnAssignment<DeSerializersT>, DeSerializersT>
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
  ): MbomItmObjDpnAssignmentApi<DeSerializersT> {
    return new MbomItmObjDpnAssignmentApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterialItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_ITEM: OneToOneLink<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT,
      MaterialBomItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterial} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL: OneToOneLink<
      MbomItmObjDpnAssignment<DeSerializersT>,
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

  entityConstructor = MbomItmObjDpnAssignment;

  requestBuilder(): MbomItmObjDpnAssignmentRequestBuilder<DeSerializersT> {
    return new MbomItmObjDpnAssignmentRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MbomItmObjDpnAssignment<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MbomItmObjDpnAssignment<DeSerializersT>,
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
    typeof MbomItmObjDpnAssignment,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MbomItmObjDpnAssignment,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DELETE_MC: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    UPDATE_MC: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BILL_OF_MATERIAL: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_CATEGORY: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VARIANT: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_VERSION: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_CHANGE_DOCUMENT: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILL_OF_MATERIAL_ITEM_NODE_NUMBER: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OBJECT_DEPENDENCY_NAME: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OBJ_DPN_PROCESSING_SEQUENCE_VALUE: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      MbomItmObjDpnAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterialItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL_ITEM: OneToOneLink<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT,
      MaterialBomItemApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillOfMaterial} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILL_OF_MATERIAL: OneToOneLink<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT,
      MaterialBomApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MbomItmObjDpnAssignment<DeSerializers>>;
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
         * Static representation of the {@link billOfMaterialItemNodeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_OF_MATERIAL_ITEM_NODE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillOfMaterialItemNodeNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link objectDependencyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_DEPENDENCY_NAME: fieldBuilder.buildEdmTypeField(
          'ObjectDependencyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link objDpnProcessingSequenceValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJ_DPN_PROCESSING_SEQUENCE_VALUE: fieldBuilder.buildEdmTypeField(
          'ObjDpnProcessingSequenceValue',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MbomItmObjDpnAssignment)
      };
    }

    return this._schema;
  }
}
