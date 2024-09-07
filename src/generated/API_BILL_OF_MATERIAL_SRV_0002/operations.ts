/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import {
  entityDeserializer,
  transformReturnValueForEntity,
  transformReturnValueForComplexType,
  transformReturnValueForComplexTypeList,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { apiBillOfMaterialSrv0002 } from './service';
import { MaterialBomItem } from './MaterialBomItem';
import { MaterialBomItemApi } from './MaterialBomItemApi';
import { DBomdelchangenooutparameter } from './DBomdelchangenooutparameter';
import { DBomheaderforexplosionOut } from './DBomheaderforexplosionOut';
import { MaterialBom } from './MaterialBom';
import { MaterialBomApi } from './MaterialBomApi';

/**
 * Type of the parameters to be passed to {@link convertItem}.
 */
export interface ConvertItemParameters<DeSerializersT extends DeSerializers> {
  /**
   * Bill Of Material.
   */
  billOfMaterial?: string | null;
  /**
   * Bill Of Material Category.
   */
  billOfMaterialCategory?: string | null;
  /**
   * Bill Of Material Variant.
   */
  billOfMaterialVariant?: string | null;
  /**
   * Bill Of Material Version.
   */
  billOfMaterialVersion?: string | null;
  /**
   * Bill Of Material Item Node Number.
   */
  billOfMaterialItemNodeNumber?: string | null;
  /**
   * Header Change Document.
   */
  headerChangeDocument?: string | null;
  /**
   * Material.
   */
  material?: string | null;
  /**
   * Plant.
   */
  plant?: string | null;
  /**
   * Bill Of Material Component.
   */
  billOfMaterialComponent?: string | null;
  /**
   * Bill Of Material Item Category.
   */
  billOfMaterialItemCategory?: string | null;
  /**
   * Bom Item Description.
   */
  bomItemDescription?: string | null;
  /**
   * Purchasing Group.
   */
  purchasingGroup?: string | null;
  /**
   * Material Group.
   */
  materialGroup?: string | null;
  /**
   * Material Price Unit Qty.
   */
  materialPriceUnitQty?: BigNumber | null;
  /**
   * Currency.
   */
  currency?: string | null;
  /**
   * Material Component Price.
   */
  materialComponentPrice?: BigNumber | null;
}

/**
 * Convert Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function convertItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ConvertItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ConvertItemParameters<DeSerializersT>,
  MaterialBomItem
> {
  const params = {
    billOfMaterial: new OperationParameter(
      'BillOfMaterial',
      'Edm.String',
      parameters.billOfMaterial
    ),
    billOfMaterialCategory: new OperationParameter(
      'BillOfMaterialCategory',
      'Edm.String',
      parameters.billOfMaterialCategory
    ),
    billOfMaterialVariant: new OperationParameter(
      'BillOfMaterialVariant',
      'Edm.String',
      parameters.billOfMaterialVariant
    ),
    billOfMaterialVersion: new OperationParameter(
      'BillOfMaterialVersion',
      'Edm.String',
      parameters.billOfMaterialVersion
    ),
    billOfMaterialItemNodeNumber: new OperationParameter(
      'BillOfMaterialItemNodeNumber',
      'Edm.String',
      parameters.billOfMaterialItemNodeNumber
    ),
    headerChangeDocument: new OperationParameter(
      'HeaderChangeDocument',
      'Edm.String',
      parameters.headerChangeDocument
    ),
    material: new OperationParameter(
      'Material',
      'Edm.String',
      parameters.material
    ),
    plant: new OperationParameter('Plant', 'Edm.String', parameters.plant),
    billOfMaterialComponent: new OperationParameter(
      'BillOfMaterialComponent',
      'Edm.String',
      parameters.billOfMaterialComponent
    ),
    billOfMaterialItemCategory: new OperationParameter(
      'BillOfMaterialItemCategory',
      'Edm.String',
      parameters.billOfMaterialItemCategory
    ),
    bomItemDescription: new OperationParameter(
      'BOMItemDescription',
      'Edm.String',
      parameters.bomItemDescription
    ),
    purchasingGroup: new OperationParameter(
      'PurchasingGroup',
      'Edm.String',
      parameters.purchasingGroup
    ),
    materialGroup: new OperationParameter(
      'MaterialGroup',
      'Edm.String',
      parameters.materialGroup
    ),
    materialPriceUnitQty: new OperationParameter(
      'MaterialPriceUnitQty',
      'Edm.Decimal',
      parameters.materialPriceUnitQty
    ),
    currency: new OperationParameter(
      'Currency',
      'Edm.String',
      parameters.currency
    ),
    materialComponentPrice: new OperationParameter(
      'MaterialComponentPrice',
      'Edm.Decimal',
      parameters.materialComponentPrice
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002',
    'ConvertItem',
    data =>
      transformReturnValueForEntity(
        data,
        apiBillOfMaterialSrv0002(deSerializers).materialBomItemApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deleteBomItemWithEcn}.
 */
export interface DeleteBomItemWithEcnParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Bill Of Material.
   */
  billOfMaterial?: string | null;
  /**
   * Bill Of Material Category.
   */
  billOfMaterialCategory?: string | null;
  /**
   * Bill Of Material Variant.
   */
  billOfMaterialVariant?: string | null;
  /**
   * Bill Of Material Version.
   */
  billOfMaterialVersion?: string | null;
  /**
   * Bill Of Material Item Node Number.
   */
  billOfMaterialItemNodeNumber?: string | null;
  /**
   * Header Change Document.
   */
  headerChangeDocument?: string | null;
  /**
   * Material.
   */
  material?: string | null;
  /**
   * Plant.
   */
  plant?: string | null;
  /**
   * Engineering Change Doc For Edit.
   */
  engineeringChangeDocForEdit?: string | null;
}

/**
 * Delete Bom Item With Ecn.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deleteBomItemWithEcn<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteBomItemWithEcnParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeleteBomItemWithEcnParameters<DeSerializersT>,
  DBomdelchangenooutparameter
> {
  const params = {
    billOfMaterial: new OperationParameter(
      'BillOfMaterial',
      'Edm.String',
      parameters.billOfMaterial
    ),
    billOfMaterialCategory: new OperationParameter(
      'BillOfMaterialCategory',
      'Edm.String',
      parameters.billOfMaterialCategory
    ),
    billOfMaterialVariant: new OperationParameter(
      'BillOfMaterialVariant',
      'Edm.String',
      parameters.billOfMaterialVariant
    ),
    billOfMaterialVersion: new OperationParameter(
      'BillOfMaterialVersion',
      'Edm.String',
      parameters.billOfMaterialVersion
    ),
    billOfMaterialItemNodeNumber: new OperationParameter(
      'BillOfMaterialItemNodeNumber',
      'Edm.String',
      parameters.billOfMaterialItemNodeNumber
    ),
    headerChangeDocument: new OperationParameter(
      'HeaderChangeDocument',
      'Edm.String',
      parameters.headerChangeDocument
    ),
    material: new OperationParameter(
      'Material',
      'Edm.String',
      parameters.material
    ),
    plant: new OperationParameter('Plant', 'Edm.String', parameters.plant),
    engineeringChangeDocForEdit: new OperationParameter(
      'EngineeringChangeDocForEdit',
      'Edm.String',
      parameters.engineeringChangeDocForEdit
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002',
    'DeleteBOMItemWithECN',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DBomdelchangenooutparameter)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link updateBomItemWithEcn}.
 */
export interface UpdateBomItemWithEcnParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Bill Of Material.
   */
  billOfMaterial?: string | null;
  /**
   * Bill Of Material Category.
   */
  billOfMaterialCategory?: string | null;
  /**
   * Bill Of Material Variant.
   */
  billOfMaterialVariant?: string | null;
  /**
   * Bill Of Material Version.
   */
  billOfMaterialVersion?: string | null;
  /**
   * Bill Of Material Item Node Number.
   */
  billOfMaterialItemNodeNumber?: string | null;
  /**
   * Header Change Document.
   */
  headerChangeDocument?: string | null;
  /**
   * Material.
   */
  material?: string | null;
  /**
   * Plant.
   */
  plant?: string | null;
  /**
   * Bill Of Material Item Uuid.
   */
  billOfMaterialItemUuid?: string | null;
  /**
   * Bom Item Internal Change Count.
   */
  bomItemInternalChangeCount?: string | null;
  /**
   * Validity Start Date.
   */
  validityStartDate?: Moment | null;
  /**
   * Validity End Date.
   */
  validityEndDate?: Moment | null;
  /**
   * Engineering Change Doc For Edit.
   */
  engineeringChangeDocForEdit?: string | null;
  /**
   * Engineering Change Document.
   */
  engineeringChangeDocument?: string | null;
  /**
   * Chg To Engineering Chg Document.
   */
  chgToEngineeringChgDocument?: string | null;
  /**
   * Inherited Node Number For Bom Item.
   */
  inheritedNodeNumberForBomItem?: string | null;
  /**
   * Bom Item Record Creation Date.
   */
  bomItemRecordCreationDate?: Moment | null;
  /**
   * Bom Item Created By User.
   */
  bomItemCreatedByUser?: string | null;
  /**
   * Bom Item Last Change Date.
   */
  bomItemLastChangeDate?: Moment | null;
  /**
   * Bom Item Last Changed By User.
   */
  bomItemLastChangedByUser?: string | null;
  /**
   * Bill Of Material Component.
   */
  billOfMaterialComponent?: string | null;
  /**
   * Bill Of Material Item Category.
   */
  billOfMaterialItemCategory?: string | null;
  /**
   * Bill Of Material Item Number.
   */
  billOfMaterialItemNumber?: string | null;
  /**
   * Bill Of Material Item Unit.
   */
  billOfMaterialItemUnit?: string | null;
  /**
   * Bill Of Material Item Quantity.
   */
  billOfMaterialItemQuantity?: BigNumber | null;
  /**
   * Is Assembly.
   */
  isAssembly?: string | null;
  /**
   * Is Sub Item.
   */
  isSubItem?: boolean | null;
  /**
   * Bom Item Sorter.
   */
  bomItemSorter?: string | null;
  /**
   * Bom Item Has Fixed Quantity.
   */
  bomItemHasFixedQuantity?: boolean | null;
  /**
   * Purchasing Group.
   */
  purchasingGroup?: string | null;
  /**
   * Currency.
   */
  currency?: string | null;
  /**
   * Material Component Price.
   */
  materialComponentPrice?: BigNumber | null;
  /**
   * Identifier Bom Item.
   */
  identifierBomItem?: string | null;
  /**
   * Material Price Unit Qty.
   */
  materialPriceUnitQty?: BigNumber | null;
  /**
   * Component Scrap In Percent.
   */
  componentScrapInPercent?: BigNumber | null;
  /**
   * Operation Scrap In Percent.
   */
  operationScrapInPercent?: BigNumber | null;
  /**
   * Is Net Scrap.
   */
  isNetScrap?: boolean | null;
  /**
   * Variable Size Item Quantity.
   */
  variableSizeItemQuantity?: BigNumber | null;
  /**
   * Variable Size Comp Unit Of Measure.
   */
  variableSizeCompUnitOfMeasure?: string | null;
  /**
   * Quantity Variable Size Item.
   */
  quantityVariableSizeItem?: BigNumber | null;
  /**
   * Formula Key.
   */
  formulaKey?: string | null;
  /**
   * Component Description.
   */
  componentDescription?: string | null;
  /**
   * Bom Item Description.
   */
  bomItemDescription?: string | null;
  /**
   * Bom Item Text 2.
   */
  bomItemText2?: string | null;
  /**
   * Material Group.
   */
  materialGroup?: string | null;
  /**
   * Document Type.
   */
  documentType?: string | null;
  /**
   * Doc Number.
   */
  docNumber?: string | null;
  /**
   * Document Version.
   */
  documentVersion?: string | null;
  /**
   * Document Part.
   */
  documentPart?: string | null;
  /**
   * Class Number.
   */
  classNumber?: string | null;
  /**
   * Class Type.
   */
  classType?: string | null;
  /**
   * Resulting Item Category.
   */
  resultingItemCategory?: string | null;
  /**
   * Dependency Object Number.
   */
  dependencyObjectNumber?: string | null;
  /**
   * Bill Of Material Item Object Type.
   */
  billOfMaterialItemObjectType?: string | null;
  /**
   * Is Classification Relevant.
   */
  isClassificationRelevant?: boolean | null;
  /**
   * Is Bulk Material.
   */
  isBulkMaterial?: boolean | null;
  /**
   * Bom Item Is Spare Part.
   */
  bomItemIsSparePart?: string | null;
  /**
   * Bom Item Is Sales Relevant.
   */
  bomItemIsSalesRelevant?: string | null;
  /**
   * Is Production Relevant.
   */
  isProductionRelevant?: boolean | null;
  /**
   * Bom Item Is Plant Maint Relevant.
   */
  bomItemIsPlantMaintRelevant?: boolean | null;
  /**
   * Bom Item Is Costing Relevant.
   */
  bomItemIsCostingRelevant?: string | null;
  /**
   * Is Engineering Relevant.
   */
  isEngineeringRelevant?: boolean | null;
  /**
   * Special Procurement Type.
   */
  specialProcurementType?: string | null;
  /**
   * Is Bom Recursive Allowed.
   */
  isBomRecursiveAllowed?: boolean | null;
  /**
   * Operation Lead Time Offset.
   */
  operationLeadTimeOffset?: BigNumber | null;
  /**
   * Ops Lead Time Offset Unit.
   */
  opsLeadTimeOffsetUnit?: string | null;
  /**
   * Is Material Provision.
   */
  isMaterialProvision?: string | null;
  /**
   * Bom Is Recursive.
   */
  bomIsRecursive?: boolean | null;
  /**
   * Document Is Created By Cad.
   */
  documentIsCreatedByCad?: boolean | null;
  /**
   * Distr Key Comp Consumption.
   */
  distrKeyCompConsumption?: string | null;
  /**
   * Delivery Duration In Days.
   */
  deliveryDurationInDays?: BigNumber | null;
  /**
   * Creditor.
   */
  creditor?: string | null;
  /**
   * Cost Element.
   */
  costElement?: string | null;
  /**
   * Size 1.
   */
  size1?: BigNumber | null;
  /**
   * Size 2.
   */
  size2?: BigNumber | null;
  /**
   * Size 3.
   */
  size3?: BigNumber | null;
  /**
   * Unit Of Measure For Size 1 To 3.
   */
  unitOfMeasureForSize1To3?: string | null;
  /**
   * Goods Receipt Duration.
   */
  goodsReceiptDuration?: BigNumber | null;
  /**
   * Purchasing Organization.
   */
  purchasingOrganization?: string | null;
  /**
   * Required Component.
   */
  requiredComponent?: boolean | null;
  /**
   * Multiple Selection Allowed.
   */
  multipleSelectionAllowed?: boolean | null;
  /**
   * Prod Order Issue Location.
   */
  prodOrderIssueLocation?: string | null;
  /**
   * Material Is Co Product.
   */
  materialIsCoProduct?: boolean | null;
  /**
   * Explosion Type.
   */
  explosionType?: string | null;
  /**
   * Alternative Item Group.
   */
  alternativeItemGroup?: string | null;
  /**
   * Alternative Item Priority.
   */
  alternativeItemPriority?: string | null;
  /**
   * Alternative Item Strategy.
   */
  alternativeItemStrategy?: string | null;
  /**
   * Usage Probability Percent.
   */
  usageProbabilityPercent?: BigNumber | null;
  /**
   * Follow Up Group.
   */
  followUpGroup?: string | null;
  /**
   * Discontinuation Group.
   */
  discontinuationGroup?: string | null;
  /**
   * Is Configurable Bom.
   */
  isConfigurableBom?: string | null;
  /**
   * Reference Point.
   */
  referencePoint?: string | null;
  /**
   * Lead Time Offset.
   */
  leadTimeOffset?: BigNumber | null;
  /**
   * Production Supply Area.
   */
  productionSupplyArea?: string | null;
  /**
   * Is Deleted.
   */
  isDeleted?: boolean | null;
  /**
   * Is Ale.
   */
  isAle?: boolean | null;
  /**
   * Last Change Date Time.
   */
  lastChangeDateTime?: Moment | null;
  /**
   * Preliminary Component.
   */
  preliminaryComponent?: string | null;
}

/**
 * Update Bom Item With Ecn.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function updateBomItemWithEcn<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UpdateBomItemWithEcnParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  UpdateBomItemWithEcnParameters<DeSerializersT>,
  MaterialBomItem
> {
  const params = {
    billOfMaterial: new OperationParameter(
      'BillOfMaterial',
      'Edm.String',
      parameters.billOfMaterial
    ),
    billOfMaterialCategory: new OperationParameter(
      'BillOfMaterialCategory',
      'Edm.String',
      parameters.billOfMaterialCategory
    ),
    billOfMaterialVariant: new OperationParameter(
      'BillOfMaterialVariant',
      'Edm.String',
      parameters.billOfMaterialVariant
    ),
    billOfMaterialVersion: new OperationParameter(
      'BillOfMaterialVersion',
      'Edm.String',
      parameters.billOfMaterialVersion
    ),
    billOfMaterialItemNodeNumber: new OperationParameter(
      'BillOfMaterialItemNodeNumber',
      'Edm.String',
      parameters.billOfMaterialItemNodeNumber
    ),
    headerChangeDocument: new OperationParameter(
      'HeaderChangeDocument',
      'Edm.String',
      parameters.headerChangeDocument
    ),
    material: new OperationParameter(
      'Material',
      'Edm.String',
      parameters.material
    ),
    plant: new OperationParameter('Plant', 'Edm.String', parameters.plant),
    billOfMaterialItemUuid: new OperationParameter(
      'BillOfMaterialItemUUID',
      'Edm.Guid',
      parameters.billOfMaterialItemUuid
    ),
    bomItemInternalChangeCount: new OperationParameter(
      'BOMItemInternalChangeCount',
      'Edm.String',
      parameters.bomItemInternalChangeCount
    ),
    validityStartDate: new OperationParameter(
      'ValidityStartDate',
      'Edm.DateTime',
      parameters.validityStartDate
    ),
    validityEndDate: new OperationParameter(
      'ValidityEndDate',
      'Edm.DateTime',
      parameters.validityEndDate
    ),
    engineeringChangeDocForEdit: new OperationParameter(
      'EngineeringChangeDocForEdit',
      'Edm.String',
      parameters.engineeringChangeDocForEdit
    ),
    engineeringChangeDocument: new OperationParameter(
      'EngineeringChangeDocument',
      'Edm.String',
      parameters.engineeringChangeDocument
    ),
    chgToEngineeringChgDocument: new OperationParameter(
      'ChgToEngineeringChgDocument',
      'Edm.String',
      parameters.chgToEngineeringChgDocument
    ),
    inheritedNodeNumberForBomItem: new OperationParameter(
      'InheritedNodeNumberForBOMItem',
      'Edm.String',
      parameters.inheritedNodeNumberForBomItem
    ),
    bomItemRecordCreationDate: new OperationParameter(
      'BOMItemRecordCreationDate',
      'Edm.DateTime',
      parameters.bomItemRecordCreationDate
    ),
    bomItemCreatedByUser: new OperationParameter(
      'BOMItemCreatedByUser',
      'Edm.String',
      parameters.bomItemCreatedByUser
    ),
    bomItemLastChangeDate: new OperationParameter(
      'BOMItemLastChangeDate',
      'Edm.DateTime',
      parameters.bomItemLastChangeDate
    ),
    bomItemLastChangedByUser: new OperationParameter(
      'BOMItemLastChangedByUser',
      'Edm.String',
      parameters.bomItemLastChangedByUser
    ),
    billOfMaterialComponent: new OperationParameter(
      'BillOfMaterialComponent',
      'Edm.String',
      parameters.billOfMaterialComponent
    ),
    billOfMaterialItemCategory: new OperationParameter(
      'BillOfMaterialItemCategory',
      'Edm.String',
      parameters.billOfMaterialItemCategory
    ),
    billOfMaterialItemNumber: new OperationParameter(
      'BillOfMaterialItemNumber',
      'Edm.String',
      parameters.billOfMaterialItemNumber
    ),
    billOfMaterialItemUnit: new OperationParameter(
      'BillOfMaterialItemUnit',
      'Edm.String',
      parameters.billOfMaterialItemUnit
    ),
    billOfMaterialItemQuantity: new OperationParameter(
      'BillOfMaterialItemQuantity',
      'Edm.Decimal',
      parameters.billOfMaterialItemQuantity
    ),
    isAssembly: new OperationParameter(
      'IsAssembly',
      'Edm.String',
      parameters.isAssembly
    ),
    isSubItem: new OperationParameter(
      'IsSubItem',
      'Edm.Boolean',
      parameters.isSubItem
    ),
    bomItemSorter: new OperationParameter(
      'BOMItemSorter',
      'Edm.String',
      parameters.bomItemSorter
    ),
    bomItemHasFixedQuantity: new OperationParameter(
      'BOMItemHasFixedQuantity',
      'Edm.Boolean',
      parameters.bomItemHasFixedQuantity
    ),
    purchasingGroup: new OperationParameter(
      'PurchasingGroup',
      'Edm.String',
      parameters.purchasingGroup
    ),
    currency: new OperationParameter(
      'Currency',
      'Edm.String',
      parameters.currency
    ),
    materialComponentPrice: new OperationParameter(
      'MaterialComponentPrice',
      'Edm.Decimal',
      parameters.materialComponentPrice
    ),
    identifierBomItem: new OperationParameter(
      'IdentifierBOMItem',
      'Edm.String',
      parameters.identifierBomItem
    ),
    materialPriceUnitQty: new OperationParameter(
      'MaterialPriceUnitQty',
      'Edm.Decimal',
      parameters.materialPriceUnitQty
    ),
    componentScrapInPercent: new OperationParameter(
      'ComponentScrapInPercent',
      'Edm.Decimal',
      parameters.componentScrapInPercent
    ),
    operationScrapInPercent: new OperationParameter(
      'OperationScrapInPercent',
      'Edm.Decimal',
      parameters.operationScrapInPercent
    ),
    isNetScrap: new OperationParameter(
      'IsNetScrap',
      'Edm.Boolean',
      parameters.isNetScrap
    ),
    variableSizeItemQuantity: new OperationParameter(
      'VariableSizeItemQuantity',
      'Edm.Decimal',
      parameters.variableSizeItemQuantity
    ),
    variableSizeCompUnitOfMeasure: new OperationParameter(
      'VariableSizeCompUnitOfMeasure',
      'Edm.String',
      parameters.variableSizeCompUnitOfMeasure
    ),
    quantityVariableSizeItem: new OperationParameter(
      'QuantityVariableSizeItem',
      'Edm.Decimal',
      parameters.quantityVariableSizeItem
    ),
    formulaKey: new OperationParameter(
      'FormulaKey',
      'Edm.String',
      parameters.formulaKey
    ),
    componentDescription: new OperationParameter(
      'ComponentDescription',
      'Edm.String',
      parameters.componentDescription
    ),
    bomItemDescription: new OperationParameter(
      'BOMItemDescription',
      'Edm.String',
      parameters.bomItemDescription
    ),
    bomItemText2: new OperationParameter(
      'BOMItemText2',
      'Edm.String',
      parameters.bomItemText2
    ),
    materialGroup: new OperationParameter(
      'MaterialGroup',
      'Edm.String',
      parameters.materialGroup
    ),
    documentType: new OperationParameter(
      'DocumentType',
      'Edm.String',
      parameters.documentType
    ),
    docNumber: new OperationParameter(
      'DocNumber',
      'Edm.String',
      parameters.docNumber
    ),
    documentVersion: new OperationParameter(
      'DocumentVersion',
      'Edm.String',
      parameters.documentVersion
    ),
    documentPart: new OperationParameter(
      'DocumentPart',
      'Edm.String',
      parameters.documentPart
    ),
    classNumber: new OperationParameter(
      'ClassNumber',
      'Edm.String',
      parameters.classNumber
    ),
    classType: new OperationParameter(
      'ClassType',
      'Edm.String',
      parameters.classType
    ),
    resultingItemCategory: new OperationParameter(
      'ResultingItemCategory',
      'Edm.String',
      parameters.resultingItemCategory
    ),
    dependencyObjectNumber: new OperationParameter(
      'DependencyObjectNumber',
      'Edm.String',
      parameters.dependencyObjectNumber
    ),
    billOfMaterialItemObjectType: new OperationParameter(
      'BillOfMaterialItemObjectType',
      'Edm.String',
      parameters.billOfMaterialItemObjectType
    ),
    isClassificationRelevant: new OperationParameter(
      'IsClassificationRelevant',
      'Edm.Boolean',
      parameters.isClassificationRelevant
    ),
    isBulkMaterial: new OperationParameter(
      'IsBulkMaterial',
      'Edm.Boolean',
      parameters.isBulkMaterial
    ),
    bomItemIsSparePart: new OperationParameter(
      'BOMItemIsSparePart',
      'Edm.String',
      parameters.bomItemIsSparePart
    ),
    bomItemIsSalesRelevant: new OperationParameter(
      'BOMItemIsSalesRelevant',
      'Edm.String',
      parameters.bomItemIsSalesRelevant
    ),
    isProductionRelevant: new OperationParameter(
      'IsProductionRelevant',
      'Edm.Boolean',
      parameters.isProductionRelevant
    ),
    bomItemIsPlantMaintRelevant: new OperationParameter(
      'BOMItemIsPlantMaintRelevant',
      'Edm.Boolean',
      parameters.bomItemIsPlantMaintRelevant
    ),
    bomItemIsCostingRelevant: new OperationParameter(
      'BOMItemIsCostingRelevant',
      'Edm.String',
      parameters.bomItemIsCostingRelevant
    ),
    isEngineeringRelevant: new OperationParameter(
      'IsEngineeringRelevant',
      'Edm.Boolean',
      parameters.isEngineeringRelevant
    ),
    specialProcurementType: new OperationParameter(
      'SpecialProcurementType',
      'Edm.String',
      parameters.specialProcurementType
    ),
    isBomRecursiveAllowed: new OperationParameter(
      'IsBOMRecursiveAllowed',
      'Edm.Boolean',
      parameters.isBomRecursiveAllowed
    ),
    operationLeadTimeOffset: new OperationParameter(
      'OperationLeadTimeOffset',
      'Edm.Decimal',
      parameters.operationLeadTimeOffset
    ),
    opsLeadTimeOffsetUnit: new OperationParameter(
      'OpsLeadTimeOffsetUnit',
      'Edm.String',
      parameters.opsLeadTimeOffsetUnit
    ),
    isMaterialProvision: new OperationParameter(
      'IsMaterialProvision',
      'Edm.String',
      parameters.isMaterialProvision
    ),
    bomIsRecursive: new OperationParameter(
      'BOMIsRecursive',
      'Edm.Boolean',
      parameters.bomIsRecursive
    ),
    documentIsCreatedByCad: new OperationParameter(
      'DocumentIsCreatedByCAD',
      'Edm.Boolean',
      parameters.documentIsCreatedByCad
    ),
    distrKeyCompConsumption: new OperationParameter(
      'DistrKeyCompConsumption',
      'Edm.String',
      parameters.distrKeyCompConsumption
    ),
    deliveryDurationInDays: new OperationParameter(
      'DeliveryDurationInDays',
      'Edm.Decimal',
      parameters.deliveryDurationInDays
    ),
    creditor: new OperationParameter(
      'Creditor',
      'Edm.String',
      parameters.creditor
    ),
    costElement: new OperationParameter(
      'CostElement',
      'Edm.String',
      parameters.costElement
    ),
    size1: new OperationParameter('Size1', 'Edm.Decimal', parameters.size1),
    size2: new OperationParameter('Size2', 'Edm.Decimal', parameters.size2),
    size3: new OperationParameter('Size3', 'Edm.Decimal', parameters.size3),
    unitOfMeasureForSize1To3: new OperationParameter(
      'UnitOfMeasureForSize1To3',
      'Edm.String',
      parameters.unitOfMeasureForSize1To3
    ),
    goodsReceiptDuration: new OperationParameter(
      'GoodsReceiptDuration',
      'Edm.Decimal',
      parameters.goodsReceiptDuration
    ),
    purchasingOrganization: new OperationParameter(
      'PurchasingOrganization',
      'Edm.String',
      parameters.purchasingOrganization
    ),
    requiredComponent: new OperationParameter(
      'RequiredComponent',
      'Edm.Boolean',
      parameters.requiredComponent
    ),
    multipleSelectionAllowed: new OperationParameter(
      'MultipleSelectionAllowed',
      'Edm.Boolean',
      parameters.multipleSelectionAllowed
    ),
    prodOrderIssueLocation: new OperationParameter(
      'ProdOrderIssueLocation',
      'Edm.String',
      parameters.prodOrderIssueLocation
    ),
    materialIsCoProduct: new OperationParameter(
      'MaterialIsCoProduct',
      'Edm.Boolean',
      parameters.materialIsCoProduct
    ),
    explosionType: new OperationParameter(
      'ExplosionType',
      'Edm.String',
      parameters.explosionType
    ),
    alternativeItemGroup: new OperationParameter(
      'AlternativeItemGroup',
      'Edm.String',
      parameters.alternativeItemGroup
    ),
    alternativeItemPriority: new OperationParameter(
      'AlternativeItemPriority',
      'Edm.String',
      parameters.alternativeItemPriority
    ),
    alternativeItemStrategy: new OperationParameter(
      'AlternativeItemStrategy',
      'Edm.String',
      parameters.alternativeItemStrategy
    ),
    usageProbabilityPercent: new OperationParameter(
      'UsageProbabilityPercent',
      'Edm.Decimal',
      parameters.usageProbabilityPercent
    ),
    followUpGroup: new OperationParameter(
      'FollowUpGroup',
      'Edm.String',
      parameters.followUpGroup
    ),
    discontinuationGroup: new OperationParameter(
      'DiscontinuationGroup',
      'Edm.String',
      parameters.discontinuationGroup
    ),
    isConfigurableBom: new OperationParameter(
      'IsConfigurableBOM',
      'Edm.String',
      parameters.isConfigurableBom
    ),
    referencePoint: new OperationParameter(
      'ReferencePoint',
      'Edm.String',
      parameters.referencePoint
    ),
    leadTimeOffset: new OperationParameter(
      'LeadTimeOffset',
      'Edm.Decimal',
      parameters.leadTimeOffset
    ),
    productionSupplyArea: new OperationParameter(
      'ProductionSupplyArea',
      'Edm.String',
      parameters.productionSupplyArea
    ),
    isDeleted: new OperationParameter(
      'IsDeleted',
      'Edm.Boolean',
      parameters.isDeleted
    ),
    isAle: new OperationParameter('IsALE', 'Edm.Boolean', parameters.isAle),
    lastChangeDateTime: new OperationParameter(
      'LastChangeDateTime',
      'Edm.DateTimeOffset',
      parameters.lastChangeDateTime
    ),
    preliminaryComponent: new OperationParameter(
      'PreliminaryComponent',
      'Edm.String',
      parameters.preliminaryComponent
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002',
    'UpdateBOMItemWithECN',
    data =>
      transformReturnValueForEntity(
        data,
        apiBillOfMaterialSrv0002(deSerializers).materialBomItemApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deleteBomHeaderWithEcn}.
 */
export interface DeleteBomHeaderWithEcnParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Bill Of Material.
   */
  billOfMaterial?: string | null;
  /**
   * Bill Of Material Category.
   */
  billOfMaterialCategory?: string | null;
  /**
   * Bill Of Material Variant.
   */
  billOfMaterialVariant?: string | null;
  /**
   * Bill Of Material Version.
   */
  billOfMaterialVersion?: string | null;
  /**
   * Engineering Change Document.
   */
  engineeringChangeDocument?: string | null;
  /**
   * Material.
   */
  material?: string | null;
  /**
   * Plant.
   */
  plant?: string | null;
  /**
   * Engineering Change Doc For Edit.
   */
  engineeringChangeDocForEdit?: string | null;
}

/**
 * Delete Bom Header With Ecn.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deleteBomHeaderWithEcn<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteBomHeaderWithEcnParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeleteBomHeaderWithEcnParameters<DeSerializersT>,
  DBomdelchangenooutparameter
> {
  const params = {
    billOfMaterial: new OperationParameter(
      'BillOfMaterial',
      'Edm.String',
      parameters.billOfMaterial
    ),
    billOfMaterialCategory: new OperationParameter(
      'BillOfMaterialCategory',
      'Edm.String',
      parameters.billOfMaterialCategory
    ),
    billOfMaterialVariant: new OperationParameter(
      'BillOfMaterialVariant',
      'Edm.String',
      parameters.billOfMaterialVariant
    ),
    billOfMaterialVersion: new OperationParameter(
      'BillOfMaterialVersion',
      'Edm.String',
      parameters.billOfMaterialVersion
    ),
    engineeringChangeDocument: new OperationParameter(
      'EngineeringChangeDocument',
      'Edm.String',
      parameters.engineeringChangeDocument
    ),
    material: new OperationParameter(
      'Material',
      'Edm.String',
      parameters.material
    ),
    plant: new OperationParameter('Plant', 'Edm.String', parameters.plant),
    engineeringChangeDocForEdit: new OperationParameter(
      'EngineeringChangeDocForEdit',
      'Edm.String',
      parameters.engineeringChangeDocForEdit
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002',
    'DeleteBOMHeaderWithECN',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DBomdelchangenooutparameter)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link explodeBom}.
 */
export interface ExplodeBomParameters<DeSerializersT extends DeSerializers> {
  /**
   * Bill Of Material.
   */
  billOfMaterial?: string | null;
  /**
   * Bill Of Material Category.
   */
  billOfMaterialCategory?: string | null;
  /**
   * Bill Of Material Variant.
   */
  billOfMaterialVariant?: string | null;
  /**
   * Bill Of Material Version.
   */
  billOfMaterialVersion?: string | null;
  /**
   * Engineering Change Document.
   */
  engineeringChangeDocument?: string | null;
  /**
   * Material.
   */
  material?: string | null;
  /**
   * Plant.
   */
  plant?: string | null;
  /**
   * Bom Explosion Application.
   */
  bomExplosionApplication?: string | null;
  /**
   * Required Quantity.
   */
  requiredQuantity?: BigNumber | null;
  /**
   * Bom Explosion Is Limited.
   */
  bomExplosionIsLimited?: boolean | null;
  /**
   * Bom Itm Qty Is Scrap Relevant.
   */
  bomItmQtyIsScrapRelevant?: string | null;
  /**
   * Bill Of Material Item Category.
   */
  billOfMaterialItemCategory?: string | null;
  /**
   * Bom Explosion Assembly.
   */
  bomExplosionAssembly?: string | null;
  /**
   * Bom Explosion Date.
   */
  bomExplosionDate?: Moment | null;
  /**
   * Bom Explosion Level.
   */
  bomExplosionLevel?: BigNumber | null;
  /**
   * Bom Explosion Is Multilevel.
   */
  bomExplosionIsMultilevel?: boolean | null;
  /**
   * Material Provision Fltr Type.
   */
  materialProvisionFltrType?: string | null;
  /**
   * Spare Part Fltr Type.
   */
  sparePartFltrType?: string | null;
  /**
   * Bom Header Base Unit.
   */
  bomHeaderBaseUnit?: string | null;
  /**
   * Final Price Indicator.
   */
  finalPriceIndicator?: boolean | null;
  /**
   * Bom Explosion Is Alternate Prio.
   */
  bomExplosionIsAlternatePrio?: boolean | null;
}

/**
 * Explode Bom.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function explodeBom<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ExplodeBomParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ExplodeBomParameters<DeSerializersT>,
  DBomheaderforexplosionOut[]
> {
  const params = {
    billOfMaterial: new OperationParameter(
      'BillOfMaterial',
      'Edm.String',
      parameters.billOfMaterial
    ),
    billOfMaterialCategory: new OperationParameter(
      'BillOfMaterialCategory',
      'Edm.String',
      parameters.billOfMaterialCategory
    ),
    billOfMaterialVariant: new OperationParameter(
      'BillOfMaterialVariant',
      'Edm.String',
      parameters.billOfMaterialVariant
    ),
    billOfMaterialVersion: new OperationParameter(
      'BillOfMaterialVersion',
      'Edm.String',
      parameters.billOfMaterialVersion
    ),
    engineeringChangeDocument: new OperationParameter(
      'EngineeringChangeDocument',
      'Edm.String',
      parameters.engineeringChangeDocument
    ),
    material: new OperationParameter(
      'Material',
      'Edm.String',
      parameters.material
    ),
    plant: new OperationParameter('Plant', 'Edm.String', parameters.plant),
    bomExplosionApplication: new OperationParameter(
      'BOMExplosionApplication',
      'Edm.String',
      parameters.bomExplosionApplication
    ),
    requiredQuantity: new OperationParameter(
      'RequiredQuantity',
      'Edm.Decimal',
      parameters.requiredQuantity
    ),
    bomExplosionIsLimited: new OperationParameter(
      'BOMExplosionIsLimited',
      'Edm.Boolean',
      parameters.bomExplosionIsLimited
    ),
    bomItmQtyIsScrapRelevant: new OperationParameter(
      'BOMItmQtyIsScrapRelevant',
      'Edm.String',
      parameters.bomItmQtyIsScrapRelevant
    ),
    billOfMaterialItemCategory: new OperationParameter(
      'BillOfMaterialItemCategory',
      'Edm.String',
      parameters.billOfMaterialItemCategory
    ),
    bomExplosionAssembly: new OperationParameter(
      'BOMExplosionAssembly',
      'Edm.String',
      parameters.bomExplosionAssembly
    ),
    bomExplosionDate: new OperationParameter(
      'BOMExplosionDate',
      'Edm.DateTime',
      parameters.bomExplosionDate
    ),
    bomExplosionLevel: new OperationParameter(
      'BOMExplosionLevel',
      'Edm.Decimal',
      parameters.bomExplosionLevel
    ),
    bomExplosionIsMultilevel: new OperationParameter(
      'BOMExplosionIsMultilevel',
      'Edm.Boolean',
      parameters.bomExplosionIsMultilevel
    ),
    materialProvisionFltrType: new OperationParameter(
      'MaterialProvisionFltrType',
      'Edm.String',
      parameters.materialProvisionFltrType
    ),
    sparePartFltrType: new OperationParameter(
      'SparePartFltrType',
      'Edm.String',
      parameters.sparePartFltrType
    ),
    bomHeaderBaseUnit: new OperationParameter(
      'BOMHeaderBaseUnit',
      'Edm.String',
      parameters.bomHeaderBaseUnit
    ),
    finalPriceIndicator: new OperationParameter(
      'FinalPriceIndicator',
      'Edm.Boolean',
      parameters.finalPriceIndicator
    ),
    bomExplosionIsAlternatePrio: new OperationParameter(
      'BOMExplosionIsAlternatePrio',
      'Edm.Boolean',
      parameters.bomExplosionIsAlternatePrio
    )
  };

  return new OperationRequestBuilder(
    'get',
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002',
    'ExplodeBOM',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DBomheaderforexplosionOut)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link releaseVersionBom}.
 */
export interface ReleaseVersionBomParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Bill Of Material.
   */
  billOfMaterial?: string | null;
  /**
   * Bill Of Material Category.
   */
  billOfMaterialCategory?: string | null;
  /**
   * Bill Of Material Variant.
   */
  billOfMaterialVariant?: string | null;
  /**
   * Bill Of Material Version.
   */
  billOfMaterialVersion?: string | null;
  /**
   * Engineering Change Document.
   */
  engineeringChangeDocument?: string | null;
  /**
   * Material.
   */
  material?: string | null;
  /**
   * Plant.
   */
  plant?: string | null;
}

/**
 * Release Version Bom.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function releaseVersionBom<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReleaseVersionBomParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ReleaseVersionBomParameters<DeSerializersT>,
  MaterialBom
> {
  const params = {
    billOfMaterial: new OperationParameter(
      'BillOfMaterial',
      'Edm.String',
      parameters.billOfMaterial
    ),
    billOfMaterialCategory: new OperationParameter(
      'BillOfMaterialCategory',
      'Edm.String',
      parameters.billOfMaterialCategory
    ),
    billOfMaterialVariant: new OperationParameter(
      'BillOfMaterialVariant',
      'Edm.String',
      parameters.billOfMaterialVariant
    ),
    billOfMaterialVersion: new OperationParameter(
      'BillOfMaterialVersion',
      'Edm.String',
      parameters.billOfMaterialVersion
    ),
    engineeringChangeDocument: new OperationParameter(
      'EngineeringChangeDocument',
      'Edm.String',
      parameters.engineeringChangeDocument
    ),
    material: new OperationParameter(
      'Material',
      'Edm.String',
      parameters.material
    ),
    plant: new OperationParameter('Plant', 'Edm.String', parameters.plant)
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002',
    'ReleaseVersionBOM',
    data =>
      transformReturnValueForEntity(
        data,
        apiBillOfMaterialSrv0002(deSerializers).materialBomApi
      ),
    params,
    deSerializers
  );
}

export const operations = {
  convertItem,
  deleteBomItemWithEcn,
  updateBomItemWithEcn,
  deleteBomHeaderWithEcn,
  explodeBom,
  releaseVersionBom
};
