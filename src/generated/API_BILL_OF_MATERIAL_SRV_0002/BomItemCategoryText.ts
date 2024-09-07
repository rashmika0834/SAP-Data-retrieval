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
import type { BomItemCategoryTextApi } from './BomItemCategoryTextApi';

/**
 * This class represents the entity "A_BOMItemCategoryText" of service "API_BILL_OF_MATERIAL_SRV".
 */
export class BomItemCategoryText<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BomItemCategoryTextType<T>
{
  /**
   * Technical entity name for BomItemCategoryText.
   */
  static override _entityName = 'A_BOMItemCategoryText';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
  /**
   * All key fields of the BomItemCategoryText entity.
   */
  static _keys = ['Language', 'BillOfMaterialItemCategory'];
  /**
   * Language Key.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Item category (bill of material).
   * Maximum length: 1.
   */
  declare billOfMaterialItemCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Category Description.
   * Maximum length: 30.
   * @nullable
   */
  declare billOfMaterialItemCategoryDesc?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: BomItemCategoryTextApi<T>) {
    super(_entityApi);
  }
}

export interface BomItemCategoryTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  language: DeserializedType<T, 'Edm.String'>;
  billOfMaterialItemCategory: DeserializedType<T, 'Edm.String'>;
  billOfMaterialItemCategoryDesc?: DeserializedType<T, 'Edm.String'> | null;
}
