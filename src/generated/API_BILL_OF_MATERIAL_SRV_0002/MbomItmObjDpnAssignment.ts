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
import type { MbomItmObjDpnAssignmentApi } from './MbomItmObjDpnAssignmentApi';
import { MaterialBomItem, MaterialBomItemType } from './MaterialBomItem';
import { MaterialBom, MaterialBomType } from './MaterialBom';

/**
 * This class represents the entity "MBOMItmObjDpnAssignment" of service "API_BILL_OF_MATERIAL_SRV".
 */
export class MbomItmObjDpnAssignment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MbomItmObjDpnAssignmentType<T>
{
  /**
   * Technical entity name for MbomItmObjDpnAssignment.
   */
  static override _entityName = 'MBOMItmObjDpnAssignment';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
  /**
   * All key fields of the MbomItmObjDpnAssignment entity.
   */
  static _keys = [
    'BillOfMaterial',
    'BillOfMaterialCategory',
    'BillOfMaterialVariant',
    'BillOfMaterialVersion',
    'HeaderChangeDocument',
    'Material',
    'Plant',
    'BillOfMaterialItemNodeNumber',
    'ObjectDependencyName'
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
   * Bill of Material.
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
   * BOM item node number.
   * Maximum length: 8.
   */
  declare billOfMaterialItemNodeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name of Dependency.
   * Maximum length: 30.
   */
  declare objectDependencyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter for sorting object allocations.
   * Maximum length: 4.
   * @nullable
   */
  declare objDpnProcessingSequenceValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Valid-From Date.
   * @nullable
   */
  declare validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Valid-to date.
   * @nullable
   */
  declare validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link MaterialBomItem} entity.
   */
  declare toBillOfMaterialItem?: MaterialBomItem<T> | null;
  /**
   * One-to-one navigation property to the {@link MaterialBom} entity.
   */
  declare toBillOfMaterial?: MaterialBom<T> | null;

  constructor(_entityApi: MbomItmObjDpnAssignmentApi<T>) {
    super(_entityApi);
  }
}

export interface MbomItmObjDpnAssignmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deleteMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  updateMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  billOfMaterial: DeserializedType<T, 'Edm.String'>;
  billOfMaterialCategory: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVariant: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVersion: DeserializedType<T, 'Edm.String'>;
  headerChangeDocument: DeserializedType<T, 'Edm.String'>;
  material: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  billOfMaterialItemNodeNumber: DeserializedType<T, 'Edm.String'>;
  objectDependencyName: DeserializedType<T, 'Edm.String'>;
  objDpnProcessingSequenceValue?: DeserializedType<T, 'Edm.String'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  toBillOfMaterialItem?: MaterialBomItemType<T> | null;
  toBillOfMaterial?: MaterialBomType<T> | null;
}
