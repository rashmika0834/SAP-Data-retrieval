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
import type { BillOfMaterialUsageTextApi } from './BillOfMaterialUsageTextApi';

/**
 * This class represents the entity "A_BillOfMaterialUsageText" of service "API_BILL_OF_MATERIAL_SRV".
 */
export class BillOfMaterialUsageText<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillOfMaterialUsageTextType<T>
{
  /**
   * Technical entity name for BillOfMaterialUsageText.
   */
  static override _entityName = 'A_BillOfMaterialUsageText';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
  /**
   * All key fields of the BillOfMaterialUsageText entity.
   */
  static _keys = ['Language', 'BillOfMaterialVariantUsage'];
  /**
   * Language Key.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: BillOfMaterialUsageTextApi<T>) {
    super(_entityApi);
  }
}

export interface BillOfMaterialUsageTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  language: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVariantUsage: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVariantUsageDesc?: DeserializedType<T, 'Edm.String'> | null;
}
