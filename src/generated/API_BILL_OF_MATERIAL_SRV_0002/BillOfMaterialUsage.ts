/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { BillOfMaterialUsageApi } from './BillOfMaterialUsageApi';
import {
  BillOfMaterialUsageText,
  BillOfMaterialUsageTextType
} from './BillOfMaterialUsageText';

/**
 * This class represents the entity "A_BillOfMaterialUsage" of service "API_BILL_OF_MATERIAL_SRV".
 */
export class BillOfMaterialUsage<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BillOfMaterialUsageType<T>
{
  /**
   * Technical entity name for BillOfMaterialUsage.
   */
  static override _entityName = 'A_BillOfMaterialUsage';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
  /**
   * All key fields of the BillOfMaterialUsage entity.
   */
  static _keys = ['BillOfMaterialVariantUsage'];
  /**
   * BOM Usage.
   * Maximum length: 1.
   */
  declare billOfMaterialVariantUsage: DeserializedType<T, 'Edm.String'>;
  /**
   * BOM usage text.
   * Maximum length: 30.
   * @nullable
   */
  declare billOfMaterialVariantUsageDesc?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link BillOfMaterialUsageText} entity.
   */
  declare toBillOfMaterialUsageText?: BillOfMaterialUsageText<T> | null;

  constructor(_entityApi: BillOfMaterialUsageApi<T>) {
    super(_entityApi);
  }
}

export interface BillOfMaterialUsageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  billOfMaterialVariantUsage: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVariantUsageDesc?: DeserializedType<T, 'Edm.String'> | null;
  toBillOfMaterialUsageText?: BillOfMaterialUsageTextType<T> | null;
}
