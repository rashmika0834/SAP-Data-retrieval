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
import type { MaterialBomApi } from './MaterialBomApi';
import { MaterialBomItem, MaterialBomItemType } from './MaterialBomItem';
import {
  BillOfMaterialUsage,
  BillOfMaterialUsageType
} from './BillOfMaterialUsage';

/**
 * This class represents the entity "MaterialBOM" of service "API_BILL_OF_MATERIAL_SRV".
 */
export class MaterialBom<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MaterialBomType<T>
{
  /**
   * Technical entity name for MaterialBom.
   */
  static override _entityName = 'MaterialBOM';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
  /**
   * All key fields of the MaterialBom entity.
   */
  static _keys = [
    'BillOfMaterial',
    'BillOfMaterialCategory',
    'BillOfMaterialVariant',
    'BillOfMaterialVersion',
    'EngineeringChangeDocument',
    'Material',
    'Plant'
  ];
  /**
   * Dyn. Action Control.
   * @nullable
   */
  declare deleteBomHeaderWithEcnAc?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Dyn. Action Control.
   * @nullable
   */
  declare releaseVersionBomAc?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Dynamic CbA-Control.
   * @nullable
   */
  declare toBillOfMaterialItemOc?: DeserializedType<T, 'Edm.Boolean'> | null;
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
  declare engineeringChangeDocument: DeserializedType<T, 'Edm.String'>;
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
   * Global identification of a BOM header change status.
   * @nullable
   */
  declare billOfMaterialHeaderUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * BOM Usage.
   * Maximum length: 1.
   * @nullable
   */
  declare billOfMaterialVariantUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Change Number.
   * Maximum length: 12.
   * @nullable
   */
  declare engineeringChangeDocForEdit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Indicator: alternative determination for multiple BOMs.
   * @nullable
   */
  declare isMultipleBomAlt?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Internal counter.
   * Maximum length: 8.
   * @nullable
   */
  declare bomHeaderInternalChangeCount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * CIM priority for selection ID.
   * Maximum length: 2.
   * @nullable
   */
  declare bomUsagePriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization group for bills of material.
   * Maximum length: 4.
   * @nullable
   */
  declare billOfMaterialAuthsnGrp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM Version Status.
   * Maximum length: 2.
   * @nullable
   */
  declare bomVersionStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Relevant for Versioning.
   * @nullable
   */
  declare isVersionBillOfMaterial?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Latest Released BOM Version.
   * @nullable
   */
  declare isLatestBomVersion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: configurable BOM.
   * @nullable
   */
  declare isConfiguredMaterial?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Technical type.
   * Maximum length: 1.
   * @nullable
   */
  declare bomTechnicalType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM group.
   * Maximum length: 18.
   * @nullable
   */
  declare bomGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM Description.
   * Maximum length: 40.
   * @nullable
   */
  declare bomHeaderText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative BOM Text.
   * Maximum length: 40.
   * @nullable
   */
  declare bomAlternativeText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill of Material Status.
   * Maximum length: 2.
   * @nullable
   */
  declare billOfMaterialStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid-From Date.
   * @nullable
   */
  declare headerValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Valid-to date.
   * @nullable
   */
  declare headerValidityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Change Number To.
   * Maximum length: 12.
   * @nullable
   */
  declare chgToEngineeringChgDocument?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ALE indicator.
   * @nullable
   */
  declare isAle?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * From Lot Size.
   * @nullable
   */
  declare matFromLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * To Lot Size.
   * @nullable
   */
  declare materialToLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Base Unit of Measure for BOM.
   * Maximum length: 3.
   * @nullable
   */
  declare bomHeaderBaseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base quantity.
   * @nullable
   */
  declare bomHeaderQuantityInBaseUnit?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Date Record Created On.
   * @nullable
   */
  declare recordCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Last Changed On.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * User Who Created Record.
   * Maximum length: 12.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name of Person Who Changed Object.
   * Maximum length: 12.
   * @nullable
   */
  declare lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Handling Deletion Flag During BOM Explosion.
   * Maximum length: 1.
   * @nullable
   */
  declare bomIsToBeDeleted?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CAD Indicator.
   * @nullable
   */
  declare documentIsCreatedByCad?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Laboratory/Design Office.
   * Maximum length: 3.
   * @nullable
   */
  declare laboratoryOrDesignOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun).
   * @nullable
   */
  declare lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Product Description.
   * Maximum length: 40.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant Name.
   * Maximum length: 30.
   * @nullable
   */
  declare plantName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Material Hdr Details Text.
   * Maximum length: 255.
   * @nullable
   */
  declare billOfMaterialHdrDetailsText?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Selected Bill Of Material Version.
   * Maximum length: 4.
   * @nullable
   */
  declare selectedBillOfMaterialVersion?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link MaterialBomItem} entity.
   */
  declare toBillOfMaterialItem: MaterialBomItem<T>[];
  /**
   * One-to-one navigation property to the {@link BillOfMaterialUsage} entity.
   */
  declare toBillOfMaterialUsage?: BillOfMaterialUsage<T> | null;

  constructor(_entityApi: MaterialBomApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialBomType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deleteBomHeaderWithEcnAc?: DeserializedType<T, 'Edm.Boolean'> | null;
  releaseVersionBomAc?: DeserializedType<T, 'Edm.Boolean'> | null;
  deleteMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  updateMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  toBillOfMaterialItemOc?: DeserializedType<T, 'Edm.Boolean'> | null;
  billOfMaterial: DeserializedType<T, 'Edm.String'>;
  billOfMaterialCategory: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVariant: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVersion: DeserializedType<T, 'Edm.String'>;
  engineeringChangeDocument: DeserializedType<T, 'Edm.String'>;
  material: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  billOfMaterialHeaderUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  billOfMaterialVariantUsage?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeDocForEdit?: DeserializedType<T, 'Edm.String'> | null;
  isMultipleBomAlt?: DeserializedType<T, 'Edm.Boolean'> | null;
  bomHeaderInternalChangeCount?: DeserializedType<T, 'Edm.String'> | null;
  bomUsagePriority?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialAuthsnGrp?: DeserializedType<T, 'Edm.String'> | null;
  bomVersionStatus?: DeserializedType<T, 'Edm.String'> | null;
  isVersionBillOfMaterial?: DeserializedType<T, 'Edm.Boolean'> | null;
  isLatestBomVersion?: DeserializedType<T, 'Edm.Boolean'> | null;
  isConfiguredMaterial?: DeserializedType<T, 'Edm.Boolean'> | null;
  bomTechnicalType?: DeserializedType<T, 'Edm.String'> | null;
  bomGroup?: DeserializedType<T, 'Edm.String'> | null;
  bomHeaderText?: DeserializedType<T, 'Edm.String'> | null;
  bomAlternativeText?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  headerValidityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  chgToEngineeringChgDocument?: DeserializedType<T, 'Edm.String'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  isAle?: DeserializedType<T, 'Edm.Boolean'> | null;
  matFromLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  materialToLotSizeQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  bomHeaderBaseUnit?: DeserializedType<T, 'Edm.String'> | null;
  bomHeaderQuantityInBaseUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  recordCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  bomIsToBeDeleted?: DeserializedType<T, 'Edm.String'> | null;
  documentIsCreatedByCad?: DeserializedType<T, 'Edm.Boolean'> | null;
  laboratoryOrDesignOffice?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  plantName?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialHdrDetailsText?: DeserializedType<T, 'Edm.String'> | null;
  selectedBillOfMaterialVersion?: DeserializedType<T, 'Edm.String'> | null;
  toBillOfMaterialItem: MaterialBomItemType<T>[];
  toBillOfMaterialUsage?: BillOfMaterialUsageType<T> | null;
}
