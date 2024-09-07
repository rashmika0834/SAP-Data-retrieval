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
import type { MaterialBomItemApi } from './MaterialBomItemApi';
import { BomItemCategory, BomItemCategoryType } from './BomItemCategory';
import {
  MbomItmObjDpnAssignment,
  MbomItmObjDpnAssignmentType
} from './MbomItmObjDpnAssignment';
import {
  MaterialBomSubItem,
  MaterialBomSubItemType
} from './MaterialBomSubItem';
import { MaterialBom, MaterialBomType } from './MaterialBom';

/**
 * This class represents the entity "MaterialBOMItem" of service "API_BILL_OF_MATERIAL_SRV".
 */
export class MaterialBomItem<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MaterialBomItemType<T>
{
  /**
   * Technical entity name for MaterialBomItem.
   */
  static override _entityName = 'MaterialBOMItem';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
  /**
   * All key fields of the MaterialBomItem entity.
   */
  static _keys = [
    'BillOfMaterial',
    'BillOfMaterialCategory',
    'BillOfMaterialVariant',
    'BillOfMaterialVersion',
    'BillOfMaterialItemNodeNumber',
    'HeaderChangeDocument',
    'Material',
    'Plant'
  ];
  /**
   * Dyn. Action Control.
   * @nullable
   */
  declare convertItemAc?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Dyn. Action Control.
   * @nullable
   */
  declare deleteBomItemWithEcnAc?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Dyn. Action Control.
   * @nullable
   */
  declare updateBomItemWithEcnAc?: DeserializedType<T, 'Edm.Boolean'> | null;
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
  declare toBomItmObjDependencyAssignmentOc?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Dynamic CbA-Control.
   * @nullable
   */
  declare toBomSubItemsOc?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Global identification of an item's change status.
   * @nullable
   */
  declare billOfMaterialItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Global identification of a BOM header change status.
   * @nullable
   */
  declare billOfMaterialHeaderUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Internal counter.
   * Maximum length: 8.
   * @nullable
   */
  declare bomItemInternalChangeCount?: DeserializedType<T, 'Edm.String'> | null;
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
   * Change Number.
   * Maximum length: 12.
   * @nullable
   */
  declare engineeringChangeDocForEdit?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Change Number.
   * Maximum length: 12.
   * @nullable
   */
  declare engineeringChangeDocument?: DeserializedType<T, 'Edm.String'> | null;
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
   * Inherited node number of BOM item.
   * Maximum length: 8.
   * @nullable
   */
  declare inheritedNodeNumberForBomItem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Date Record Created On.
   * @nullable
   */
  declare bomItemRecordCreationDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * User Who Created Record.
   * Maximum length: 12.
   * @nullable
   */
  declare bomItemCreatedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Changed On.
   * @nullable
   */
  declare bomItemLastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Name of Person Who Changed Object.
   * Maximum length: 12.
   * @nullable
   */
  declare bomItemLastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM component.
   * Maximum length: 40.
   * @nullable
   */
  declare billOfMaterialComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item category (bill of material).
   * Maximum length: 1.
   * @nullable
   */
  declare billOfMaterialItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM Item Number.
   * Maximum length: 4.
   * @nullable
   */
  declare billOfMaterialItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Component Unit of Measure.
   * Maximum length: 3.
   * @nullable
   */
  declare billOfMaterialItemUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Component Quantity.
   * @nullable
   */
  declare billOfMaterialItemQuantity?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Single-Character Flag.
   * Maximum length: 1.
   * @nullable
   */
  declare isAssembly?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: sub-items exist.
   * @nullable
   */
  declare isSubItem?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Sort String.
   * Maximum length: 10.
   * @nullable
   */
  declare bomItemSorter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Quantity.
   * @nullable
   */
  declare fixedQuantity?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Fixed Quantity.
   * @nullable
   */
  declare bomItemHasFixedQuantity?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   * @nullable
   */
  declare purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Key.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   * @nullable
   */
  declare materialComponentPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * External identification of an item.
   * Maximum length: 8.
   * @nullable
   */
  declare identifierBomItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price unit.
   * @nullable
   */
  declare materialPriceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Component Scrap in Percent.
   * @nullable
   */
  declare componentScrapInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Operation Scrap.
   * @nullable
   */
  declare operationScrapInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Scrap Indicator.
   * @nullable
   */
  declare isNetScrap?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Required Number of Variable-Size Items.
   * @nullable
   */
  declare numberOfVariableSizeItem?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Variable-Size Item Quantity per Piece (PC).
   * @nullable
   */
  declare quantityVariableSizeItem?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Formula Key for Variable-Size Items.
   * Maximum length: 2.
   * @nullable
   */
  declare formulaKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object description (item).
   * Maximum length: 40.
   * @nullable
   */
  declare componentDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM Item Text (Line 1).
   * Maximum length: 40.
   * @nullable
   */
  declare bomItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM Item Text (Line 2).
   * Maximum length: 40.
   * @nullable
   */
  declare bomItemText2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group.
   * Maximum length: 9.
   * @nullable
   */
  declare materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Type.
   * Maximum length: 3.
   * @nullable
   */
  declare documentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * Maximum length: 25.
   * @nullable
   */
  declare docNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Version.
   * Maximum length: 2.
   * @nullable
   */
  declare documentVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Part.
   * Maximum length: 3.
   * @nullable
   */
  declare documentPart?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class number.
   * Maximum length: 18.
   * @nullable
   */
  declare classNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Type.
   * Maximum length: 3.
   * @nullable
   */
  declare classType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resulting item category.
   * Maximum length: 1.
   * @nullable
   */
  declare resultingItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number of Object with Assigned Dependencies.
   * Maximum length: 18.
   * @nullable
   */
  declare dependencyObjectNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object type (BOM item).
   * Maximum length: 1.
   * @nullable
   */
  declare objectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: classification as selection condition.
   * @nullable
   */
  declare isClassificationRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Bulk Material.
   * @nullable
   */
  declare isBulkMaterial?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Spare Part.
   * Maximum length: 1.
   * @nullable
   */
  declare bomItemIsSparePart?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: item relevant to sales.
   * Maximum length: 1.
   * @nullable
   */
  declare bomItemIsSalesRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: item relevant to production.
   * @nullable
   */
  declare isProductionRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: item relevant to plant maintenance.
   * @nullable
   */
  declare bomItemIsPlantMaintRelevant?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Indicator for relevancy to costing.
   * Maximum length: 1.
   * @nullable
   */
  declare bomItemIsCostingRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: item relevant to engineering.
   * @nullable
   */
  declare isEngineeringRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Special Procurement Type for BOM Item.
   * Maximum length: 2.
   * @nullable
   */
  declare specialProcurementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: recursiveness allowed.
   * @nullable
   */
  declare isBomRecursiveAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Lead-time offset for operation.
   * @nullable
   */
  declare operationLeadTimeOffset?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit for lead-time offset for operation.
   * Maximum length: 3.
   * @nullable
   */
  declare opsLeadTimeOffsetUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Provision Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare isMaterialProvision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: BOM is recursive.
   * @nullable
   */
  declare bomIsRecursive?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * CAD Indicator.
   * @nullable
   */
  declare documentIsCreatedByCad?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Distribution key for component consumption.
   * Maximum length: 4.
   * @nullable
   */
  declare distrKeyCompConsumption?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery time in days.
   * @nullable
   */
  declare deliveryDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Account Number of Supplier.
   * Maximum length: 10.
   * @nullable
   */
  declare creditor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost element.
   * Maximum length: 10.
   * @nullable
   */
  declare costElement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size 1.
   * @nullable
   */
  declare size1?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Size 2.
   * @nullable
   */
  declare size2?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Size 3.
   * @nullable
   */
  declare size3?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Unit of measure for sizes 1 to 3.
   * Maximum length: 3.
   * @nullable
   */
  declare unitOfMeasureForSize1To3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Goods receipt processing time in days.
   * @nullable
   */
  declare goodsReceiptDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Purchasing Organization.
   * Maximum length: 4.
   * @nullable
   */
  declare purchasingOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required Component.
   * @nullable
   */
  declare requiredComponent?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Multiple Selection Allowed.
   * @nullable
   */
  declare multipleSelectionAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Issue Location for Production Order.
   * Maximum length: 4.
   * @nullable
   */
  declare prodOrderIssueLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: co-product.
   * @nullable
   */
  declare materialIsCoProduct?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Explosion type.
   * Maximum length: 2.
   * @nullable
   */
  declare explosionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative item: group.
   * Maximum length: 2.
   * @nullable
   */
  declare alternativeItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative item: ranking order.
   * Maximum length: 2.
   * @nullable
   */
  declare alternativeItemPriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative item: strategy.
   * Maximum length: 1.
   * @nullable
   */
  declare alternativeItemStrategy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Probability in % (Alternative Item).
   * @nullable
   */
  declare usageProbabilityPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Follow-up group.
   * Maximum length: 2.
   * @nullable
   */
  declare followUpGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discontinuation group.
   * Maximum length: 2.
   * @nullable
   */
  declare discontinuationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Selection indicator for configurable BOMs.
   * Maximum length: 1.
   * @nullable
   */
  declare isConfigurableBom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference point for BOM transfer.
   * Maximum length: 20.
   * @nullable
   */
  declare referencePoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lead-time offset.
   * @nullable
   */
  declare leadTimeOffset?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Production Supply Area.
   * Maximum length: 10.
   * @nullable
   */
  declare productionSupplyArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  declare isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ALE indicator.
   * @nullable
   */
  declare isAle?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun).
   * @nullable
   */
  declare lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Material Description.
   * Maximum length: 40.
   * @nullable
   */
  declare preliminaryComponent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BomItemCategory} entity.
   */
  declare toBomItemCategory?: BomItemCategory<T> | null;
  /**
   * One-to-many navigation property to the {@link MbomItmObjDpnAssignment} entity.
   */
  declare toBomItmObjDependencyAssignment: MbomItmObjDpnAssignment<T>[];
  /**
   * One-to-many navigation property to the {@link MaterialBomSubItem} entity.
   */
  declare toBomSubItems: MaterialBomSubItem<T>[];
  /**
   * One-to-one navigation property to the {@link MaterialBom} entity.
   */
  declare toBillOfMaterial?: MaterialBom<T> | null;

  constructor(_entityApi: MaterialBomItemApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialBomItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  convertItemAc?: DeserializedType<T, 'Edm.Boolean'> | null;
  deleteBomItemWithEcnAc?: DeserializedType<T, 'Edm.Boolean'> | null;
  updateBomItemWithEcnAc?: DeserializedType<T, 'Edm.Boolean'> | null;
  deleteMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  updateMc?: DeserializedType<T, 'Edm.Boolean'> | null;
  toBomItmObjDependencyAssignmentOc?: DeserializedType<T, 'Edm.Boolean'> | null;
  toBomSubItemsOc?: DeserializedType<T, 'Edm.Boolean'> | null;
  billOfMaterial: DeserializedType<T, 'Edm.String'>;
  billOfMaterialCategory: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVariant: DeserializedType<T, 'Edm.String'>;
  billOfMaterialVersion: DeserializedType<T, 'Edm.String'>;
  billOfMaterialItemNodeNumber: DeserializedType<T, 'Edm.String'>;
  headerChangeDocument: DeserializedType<T, 'Edm.String'>;
  material: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  billOfMaterialItemUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  billOfMaterialHeaderUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  bomItemInternalChangeCount?: DeserializedType<T, 'Edm.String'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  engineeringChangeDocForEdit?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeDocument?: DeserializedType<T, 'Edm.String'> | null;
  chgToEngineeringChgDocument?: DeserializedType<T, 'Edm.String'> | null;
  inheritedNodeNumberForBomItem?: DeserializedType<T, 'Edm.String'> | null;
  bomItemRecordCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bomItemCreatedByUser?: DeserializedType<T, 'Edm.String'> | null;
  bomItemLastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bomItemLastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialComponent?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialItemUnit?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialItemQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  isAssembly?: DeserializedType<T, 'Edm.String'> | null;
  isSubItem?: DeserializedType<T, 'Edm.Boolean'> | null;
  bomItemSorter?: DeserializedType<T, 'Edm.String'> | null;
  fixedQuantity?: DeserializedType<T, 'Edm.Boolean'> | null;
  bomItemHasFixedQuantity?: DeserializedType<T, 'Edm.Boolean'> | null;
  purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  materialComponentPrice?: DeserializedType<T, 'Edm.Decimal'> | null;
  identifierBomItem?: DeserializedType<T, 'Edm.String'> | null;
  materialPriceUnitQty?: DeserializedType<T, 'Edm.Decimal'> | null;
  componentScrapInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  operationScrapInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  isNetScrap?: DeserializedType<T, 'Edm.Boolean'> | null;
  numberOfVariableSizeItem?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantityVariableSizeItem?: DeserializedType<T, 'Edm.Decimal'> | null;
  formulaKey?: DeserializedType<T, 'Edm.String'> | null;
  componentDescription?: DeserializedType<T, 'Edm.String'> | null;
  bomItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  bomItemText2?: DeserializedType<T, 'Edm.String'> | null;
  materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  docNumber?: DeserializedType<T, 'Edm.String'> | null;
  documentVersion?: DeserializedType<T, 'Edm.String'> | null;
  documentPart?: DeserializedType<T, 'Edm.String'> | null;
  classNumber?: DeserializedType<T, 'Edm.String'> | null;
  classType?: DeserializedType<T, 'Edm.String'> | null;
  resultingItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  dependencyObjectNumber?: DeserializedType<T, 'Edm.String'> | null;
  objectType?: DeserializedType<T, 'Edm.String'> | null;
  isClassificationRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  isBulkMaterial?: DeserializedType<T, 'Edm.Boolean'> | null;
  bomItemIsSparePart?: DeserializedType<T, 'Edm.String'> | null;
  bomItemIsSalesRelevant?: DeserializedType<T, 'Edm.String'> | null;
  isProductionRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  bomItemIsPlantMaintRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  bomItemIsCostingRelevant?: DeserializedType<T, 'Edm.String'> | null;
  isEngineeringRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  specialProcurementType?: DeserializedType<T, 'Edm.String'> | null;
  isBomRecursiveAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  operationLeadTimeOffset?: DeserializedType<T, 'Edm.Decimal'> | null;
  opsLeadTimeOffsetUnit?: DeserializedType<T, 'Edm.String'> | null;
  isMaterialProvision?: DeserializedType<T, 'Edm.String'> | null;
  bomIsRecursive?: DeserializedType<T, 'Edm.Boolean'> | null;
  documentIsCreatedByCad?: DeserializedType<T, 'Edm.Boolean'> | null;
  distrKeyCompConsumption?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  creditor?: DeserializedType<T, 'Edm.String'> | null;
  costElement?: DeserializedType<T, 'Edm.String'> | null;
  size1?: DeserializedType<T, 'Edm.Decimal'> | null;
  size2?: DeserializedType<T, 'Edm.Decimal'> | null;
  size3?: DeserializedType<T, 'Edm.Decimal'> | null;
  unitOfMeasureForSize1To3?: DeserializedType<T, 'Edm.String'> | null;
  goodsReceiptDuration?: DeserializedType<T, 'Edm.Decimal'> | null;
  purchasingOrganization?: DeserializedType<T, 'Edm.String'> | null;
  requiredComponent?: DeserializedType<T, 'Edm.Boolean'> | null;
  multipleSelectionAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  prodOrderIssueLocation?: DeserializedType<T, 'Edm.String'> | null;
  materialIsCoProduct?: DeserializedType<T, 'Edm.Boolean'> | null;
  explosionType?: DeserializedType<T, 'Edm.String'> | null;
  alternativeItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  alternativeItemPriority?: DeserializedType<T, 'Edm.String'> | null;
  alternativeItemStrategy?: DeserializedType<T, 'Edm.String'> | null;
  usageProbabilityPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  followUpGroup?: DeserializedType<T, 'Edm.String'> | null;
  discontinuationGroup?: DeserializedType<T, 'Edm.String'> | null;
  isConfigurableBom?: DeserializedType<T, 'Edm.String'> | null;
  referencePoint?: DeserializedType<T, 'Edm.String'> | null;
  leadTimeOffset?: DeserializedType<T, 'Edm.Decimal'> | null;
  productionSupplyArea?: DeserializedType<T, 'Edm.String'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  isAle?: DeserializedType<T, 'Edm.Boolean'> | null;
  lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  preliminaryComponent?: DeserializedType<T, 'Edm.String'> | null;
  toBomItemCategory?: BomItemCategoryType<T> | null;
  toBomItmObjDependencyAssignment: MbomItmObjDpnAssignmentType<T>[];
  toBomSubItems: MaterialBomSubItemType<T>[];
  toBillOfMaterial?: MaterialBomType<T> | null;
}
