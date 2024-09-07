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
import type { MaterialBomSubItemApi } from './MaterialBomSubItemApi';
import { MaterialBomItem, MaterialBomItemType } from './MaterialBomItem';
import { MaterialBom, MaterialBomType } from './MaterialBom';

/**
 * This class represents the entity "MaterialBOMSubItem" of service "API_BILL_OF_MATERIAL_SRV".
 */
export class MaterialBomSubItem<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MaterialBomSubItemType<T>
{
  /**
   * Technical entity name for MaterialBomSubItem.
   */
  static override _entityName = 'MaterialBOMSubItem';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
  /**
   * All key fields of the MaterialBomSubItem entity.
   */
  static _keys = [
    'BillOfMaterial',
    'BillOfMaterialCategory',
    'BillOfMaterialVariant',
    'BillOfMaterialVersion',
    'BillOfMaterialItemNodeNumber',
    'HeaderChangeDocument',
    'Material',
    'Plant',
    'BOMItemInternalChangeCount',
    'BOMSubItemNumberValue'
  ];
  /**
   * Dyn. Method Control.
   * @nullable
   */
  declare deleteMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Dyn. Method Control.
   * @nullable
   */
  declare updateMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Character field, 8 characters long.
   * Maximum length: 8.
   */
  declare billOfMaterial: DeserializedType<T, 'Edm.String'>;
  /**
   * BOM category.
   * Maximum length: 1.
   */
  declare billOfMaterialCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Alternative BOM.
   * Maximum length: 2.
   */
  declare billOfMaterialVariant: DeserializedType<T, 'Edm.String'>;
  /**
   * BOM Version.
   * Maximum length: 4.
   */
  declare billOfMaterialVersion: DeserializedType<T, 'Edm.String'>;
  /**
   * BOM item node number.
   * Maximum length: 8.
   */
  declare billOfMaterialItemNodeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Change Number.
   * Maximum length: 12.
   */
  declare headerChangeDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Number.
   * Maximum length: 40.
   */
  declare material: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal counter.
   * Maximum length: 8.
   */
  declare bomItemInternalChangeCount: DeserializedType<T, 'Edm.String'>;
  /**
   * Undefined range (can be used for patch levels).
   * Maximum length: 4.
   */
  declare bomSubItemNumberValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Component Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare billOfMaterialItemUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub-item quantity.
   * @nullable
   */
  declare billOfMaterialSubItemQuantity?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Installation Point for Subitem.
   * Maximum length: 20.
   * @nullable
   */
  declare bomSubItemInstallationPoint?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * BOM sub-item text.
   * Maximum length: 40.
   * @nullable
   */
  declare billOfMaterialSubItemText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link MaterialBomItem} entity.
   */
  declare toBillOfMaterialItem?: MaterialBomItem<T> | null;
  /**
   * One-to-one navigation property to the {@link MaterialBom} entity.
   */
  declare toBillOfMaterial?: MaterialBom<T> | null;

  constructor(_entityApi: MaterialBomSubItemApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialBomSubItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deleteMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  updateMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  billOfMaterial: DeserializedType<T, 'Edm.String'>;
  billOfMaterialCategory: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVariant: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVersion: DeserializedType<T, 'Edm.String'>;
  billOfMaterialItemNodeNumber: DeserializedType<T, 'Edm.String'>;
  headerChangeDocument: DeserializedType<T, 'Edm.String'>;
  material: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  bomItemInternalChangeCount: DeserializedType<T, 'Edm.String'>;
  bomSubItemNumberValue: DeserializedType<T, 'Edm.String'>;
  billOfMaterialItemUnit?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialSubItemQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  bomSubItemInstallationPoint?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialSubItemText?: DeserializedType<T, 'Edm.String'> | null;
  toBillOfMaterialItem?: MaterialBomItemType<T> | null;
  toBillOfMaterial?: MaterialBomType<T> | null;
}
