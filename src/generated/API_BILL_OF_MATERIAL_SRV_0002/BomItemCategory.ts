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
import type { BomItemCategoryApi } from './BomItemCategoryApi';
import {
  BomItemCategoryText,
  BomItemCategoryTextType
} from './BomItemCategoryText';

/**
 * This class represents the entity "A_BOMItemCategory" of service "API_BILL_OF_MATERIAL_SRV".
 */
export class BomItemCategory<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BomItemCategoryType<T>
{
  /**
   * Technical entity name for BomItemCategory.
   */
  static override _entityName = 'A_BOMItemCategory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
  /**
   * All key fields of the BomItemCategory entity.
   */
  static _keys = ['BillOfMaterialItemCategory'];
  /**
   * Item category (bill of material).
   * Maximum length: 1.
   */
  declare billOfMaterialItemCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Item category (bill of material).
   * Maximum length: 1.
   * @nullable
   */
  declare fixedItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Category Description.
   * Maximum length: 30.
   * @nullable
   */
  declare billOfMaterialItemCategoryDesc?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link BomItemCategoryText} entity.
   */
  declare toBomItemCategoryText?: BomItemCategoryText<T> | null;

  constructor(_entityApi: BomItemCategoryApi<T>) {
    super(_entityApi);
  }
}

export interface BomItemCategoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  billOfMaterialItemCategory: DeserializedType<T, 'Edm.String'>;
  fixedItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialItemCategoryDesc?: DeserializedType<T, 'Edm.String'> | null;
  toBomItemCategoryText?: BomItemCategoryTextType<T> | null;
}
