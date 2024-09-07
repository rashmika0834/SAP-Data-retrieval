/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * DBomheaderforexplosionOut
 */
export interface DBomheaderforexplosionOut<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Alternative item.
   * @nullable
   */
  alternativeItem?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * AltItemGroup.
   * @nullable
   */
  altItemGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Altrntvs (Nxt Level).
   * @nullable
   */
  altNxtLvl?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * PM assembly.
   * @nullable
   */
  assemblyIndicator?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Assign effect. vals.
   * @nullable
   */
  assignEffectVals?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * AssyScrap (ItemMat).
   * @nullable
   */
  assyScrapItmMat?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * as selection cond.
   * @nullable
   */
  asSelectionCond?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * BasQty (Next Level).
   * @nullable
   */
  baseQtyNxtLvl?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * BasUnit (Next Level).
   * @nullable
   */
  baseUnitNxtLvl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Base Unit of Measure.
   * @nullable
   */
  baseUom?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Batch entry.
   * @nullable
   */
  batchEntry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Batch Management.
   * @nullable
   */
  batchMgmt?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Bill of Material.
   * @nullable
   */
  billOfMaterial?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Comp. Qty (BUn).
   * @nullable
   */
  billOfMaterialBaseQuant?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Component.
   * @nullable
   */
  billOfMaterialComponent?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Comp. Qty (CUn).
   * @nullable
   */
  billOfMaterialCompQuant?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Item Category.
   * @nullable
   */
  billOfMaterialItemCategory?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  billOfMaterialItemNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Component Quantity.
   * @nullable
   */
  billOfMaterialItemQuantity?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Base Unit of Measure.
   * @nullable
   */
  billOfMaterialItemUnit?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bill of Material.
   * @nullable
   */
  billOfMaterialRoot?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Alternative BOM.
   * @nullable
   */
  billOfMaterialRootVariant?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Alternative BOM.
   * @nullable
   */
  billOfMaterialVariant?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * BOM usage.
   * @nullable
   */
  billOfMaterialVariantUsage?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Change Number.
   * @nullable
   */
  bomChangeNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bulk Material.
   * @nullable
   */
  bulkMaterial?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Alternative Text.
   * @nullable
   */
  bOMAlternativeText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * BOM Alt (Next Level).
   * @nullable
   */
  bOMAltNxtLvl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * BOM category.
   * @nullable
   */
  bOMCategory?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * BOM Cat (Next Level).
   * @nullable
   */
  bOMCatNxtLvl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Object description.
   * @nullable
   */
  bOMComponentDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Level.
   * @nullable
   */
  bOMExplosionLevel?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Material.
   * @nullable
   */
  bOMHdrMatlHierNode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Material.
   * @nullable
   */
  bOMHdrRootMatlHierNode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Base Unit of Measure.
   * @nullable
   */
  bOMHeaderBaseUnit?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Base quantity.
   * @nullable
   */
  bOMHeaderQuantityPrimary?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Item Text.
   * @nullable
   */
  bOMItemDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Discontinuation ind.
   * @nullable
   */
  bOMItemIsDiscontinued?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * BOM No. (Next Level).
   * @nullable
   */
  bOMNoNxtLvl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * BOM Usage (Next Lvl).
   * @nullable
   */
  bOMUsageNxtLvl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * BOM Version.
   * @nullable
   */
  bOMVersion?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * BOM Version Status.
   * @nullable
   */
  bOMVersionStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Short text.
   * @nullable
   */
  bOMVersStatusDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Change Number.
   * @nullable
   */
  changeNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Change Number To.
   * @nullable
   */
  chgToEngChgNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Class.
   * @nullable
   */
  class?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Classification.
   * @nullable
   */
  classification?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Class Type.
   * @nullable
   */
  classType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Commodity Code.
   * @nullable
   */
  commodityCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Compl. maint. status.
   * @nullable
   */
  compMaintStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * CmpScrap (Item).
   * @nullable
   */
  compScrapItm?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Comp.Scrap (ItemMat).
   * @nullable
   */
  compScrapItmMat?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Config. (MatVar).
   * @nullable
   */
  configMatVar?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Configd multi.
   * @nullable
   */
  configMultiLevel?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Conf BOM (Nxt Level).
   * @nullable
   */
  confBomNxtLvl?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Cost element.
   * @nullable
   */
  costElement?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Counter.
   * @nullable
   */
  counter?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Co-product.
   * @nullable
   */
  coProduct?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Created By.
   * @nullable
   */
  createdByUser?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Customs Preference.
   * @nullable
   */
  customsPreference?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * DatHist (Next Level).
   * @nullable
   */
  datHistNxtLvl?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Dln Indicator(Head).
   * @nullable
   */
  deletionIndicator?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Delivery time (days).
   * @nullable
   */
  deliveryTimeInDays?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * DlInd (Next Level).
   * @nullable
   */
  delIndNxtLvl?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Denominator.
   * @nullable
   */
  denominator?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Discont. group.
   * @nullable
   */
  discontGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Distribution key.
   * @nullable
   */
  distributionKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document.
   * @nullable
   */
  doc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Part.
   * @nullable
   */
  documentPart?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Version.
   * @nullable
   */
  documentVersion?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document.
   * @nullable
   */
  docNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Documentation reqd.
   * @nullable
   */
  docReqd?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Document Status.
   * @nullable
   */
  docStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Type.
   * @nullable
   */
  docType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Document Version.
   * @nullable
   */
  docVersion?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Effective-Out Date.
   * @nullable
   */
  effectiveOutDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Engineering/design.
   * @nullable
   */
  engineeringDesign?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Exception.
   * @nullable
   */
  exceptionBom?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Explosion type.
   * @nullable
   */
  explosionType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fixed-Price Co-Prod.
   * @nullable
   */
  fixedPriceCoProd?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Fixed Quantity.
   * @nullable
   */
  fixedQuantity?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Follow-up group.
   * @nullable
   */
  followUpGrp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Follow-Up Item.
   * @nullable
   */
  followUpItem?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Follow-Up Material.
   * @nullable
   */
  followUpProduct?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * VSI Formula.
   * @nullable
   */
  formulaKey?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * GR processing time.
   * @nullable
   */
  goodsReceiptDurationInDays?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Goods Recipient.
   * @nullable
   */
  goodsRecipient?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Header record ID.
   * @nullable
   */
  headerRecordId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Valid to.
   * @nullable
   */
  headerValidityEndDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Valid From.
   * @nullable
   */
  headerValidityStartDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * HL configuration.
   * @nullable
   */
  hlConfiguration?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Indiv./ Coll.
   * @nullable
   */
  individualColl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Internal Object No.
   * @nullable
   */
  internalObjNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Intra Material.
   * @nullable
   */
  intraMaterial?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Issuing Plant.
   * @nullable
   */
  issuingPlant?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Spare Part Indicator.
   * @nullable
   */
  isBOMItemSparePart?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * CAD Indicator.
   * @nullable
   */
  isCAD?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Mat. Provision Ind.
   * @nullable
   */
  isMaterialProvision?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Phantom item.
   * @nullable
   */
  isPhantomItem?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Software component.
   * @nullable
   */
  isSoftwareComponent?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Item Text 2.
   * @nullable
   */
  itemDescriptionLine2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Item identification.
   * @nullable
   */
  itemIdentification?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Table Row.
   * @nullable
   */
  itemIndex?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Item node.
   * @nullable
   */
  itemNode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * +/- sign.
   * @nullable
   */
  itemSign?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Changed By.
   * @nullable
   */
  lastChangedByUser?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Changed On.
   * @nullable
   */
  lastChangeDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Lead-time offset.
   * @nullable
   */
  leadTimeOffset?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Long Text Language.
   * @nullable
   */
  longTextLang?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Low-Level Code.
   * @nullable
   */
  lowLevelCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Maintenance Status.
   * @nullable
   */
  maintenanceStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price.
   * @nullable
   */
  materialComponentPrice?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Material Group.
   * @nullable
   */
  materialGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Configrable Material.
   * @nullable
   */
  materialIsConfigurable?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Material Description.
   * @nullable
   */
  materialName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Material Type.
   * @nullable
   */
  materialType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Mat. purity in %.
   * @nullable
   */
  matPurityInPerc?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Moving price.
   * @nullable
   */
  movingPrice?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Multiple Selection.
   * @nullable
   */
  multipleSel?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * MRP Type.
   * @nullable
   */
  mRPType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Net Scrap Indicator.
   * @nullable
   */
  netScrapIndicator?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * NoCUInstances.
   * @nullable
   */
  noCuInstances?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Number Of Sheets.
   * @nullable
   */
  noOfSheets?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * No. of VSI Required.
   * @nullable
   */
  noVarSizeItems?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Numerator.
   * @nullable
   */
  numerator?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Object description.
   * @nullable
   */
  objectDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Object Type.
   * @nullable
   */
  objectType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Assignment number.
   * @nullable
   */
  objDepAssgtNo?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Operation Scrap in %.
   * @nullable
   */
  operationScrapPerc?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Operation LTO unit.
   * @nullable
   */
  operLtoUnit?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Oper. LT offset.
   * @nullable
   */
  operLtOffset?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Organizational area.
   * @nullable
   */
  orgArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Page Format.
   * @nullable
   */
  pageFormat?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Page Number.
   * @nullable
   */
  pageNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Path.
   * @nullable
   */
  path?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Path (Predecessor).
   * @nullable
   */
  pathPredecessor?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Plant.
   * @nullable
   */
  plant?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Name 1.
   * @nullable
   */
  plantName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Plant maintenance.
   * @nullable
   */
  plantMaintenance?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Material Status.
   * @nullable
   */
  plantSpMatlStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Valid From.
   * @nullable
   */
  pltSpStatusValidFrom?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Price control.
   * @nullable
   */
  priceControl?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Price Unit (ItemMat).
   * @nullable
   */
  priceUnit?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Priority.
   * @nullable
   */
  priority?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Procured externally.
   * @nullable
   */
  procuredExternally?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Prodn Supply Area.
   * @nullable
   */
  prodnSupplyArea?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Production relevant.
   * @nullable
   */
  productionRelevant?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Production Version.
   * @nullable
   */
  productionVersion?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Storage Location.
   * @nullable
   */
  prodOrderIssueLocation?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Profit Center.
   * @nullable
   */
  profitCenter?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purchasing Group.
   * @nullable
   */
  purchasingGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Purch. Organization.
   * @nullable
   */
  purchasingOrganisation?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * VSI Quantity per PC.
   * @nullable
   */
  qtyVarSizeItem?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Created On.
   * @nullable
   */
  recordCreationDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Recursive.
   * @nullable
   */
  recurisve?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Recurs. allowed.
   * @nullable
   */
  recursAllowed?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Reference point.
   * @nullable
   */
  referencePoint?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * CostingRelevncy.
   * @nullable
   */
  relevancyToCosting?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Relevant to sales.
   * @nullable
   */
  relevantToSales?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Required Component.
   * @nullable
   */
  requiredComponent?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Requirement Segment.
   * @nullable
   */
  requirementSegment?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Revision Level.
   * @nullable
   */
  revisionLevel?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Scrap Qty (BUn).
   * @nullable
   */
  scrapQtyBun?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Serial No. Profile.
   * @nullable
   */
  serialNoProfile?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Size 1.
   * @nullable
   */
  size1?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Size 2.
   * @nullable
   */
  size2?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Size 3.
   * @nullable
   */
  size3?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Size unit.
   * @nullable
   */
  sizeUnit?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sort String.
   * @nullable
   */
  sortString?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Special Procurement.
   * @nullable
   */
  specialProcurementType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Special Procurement.
   * @nullable
   */
  specialProcTypItm?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Special procurement.
   * @nullable
   */
  specialProcTypMastr?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * SpecProcurem Costing.
   * @nullable
   */
  specProcCosting?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Standard price.
   * @nullable
   */
  standardPrice?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Status Text.
   * @nullable
   */
  statusText?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Stock Segment.
   * @nullable
   */
  stockSegment?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Storage Location.
   * @nullable
   */
  storageLocation?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Strategy.
   * @nullable
   */
  strategy?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sub-item indicator.
   * @nullable
   */
  subItemIndicator?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Supplier.
   * @nullable
   */
  supplier?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Table Row.
   * @nullable
   */
  tableRow?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tech status from.
   * @nullable
   */
  techStatusFrom?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * TeStHist (Next Lvl).
   * @nullable
   */
  testHistNxtLvl?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Totals record ID.
   * @nullable
   */
  totalsRecordId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Component UoM.
   * @nullable
   */
  unitOfMeasure?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Unloading Point.
   * @nullable
   */
  unloadingPoint?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Units of meas. usage.
   * @nullable
   */
  uomUsage?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Usage Probability.
   * @nullable
   */
  usageProbability?: DeserializedType<DeSerializersT, 'Edm.Decimal'>;
  /**
   * Valid to.
   * @nullable
   */
  validityEndDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Valid From.
   * @nullable
   */
  validityStartDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Valuation Category.
   * @nullable
   */
  valuationCategory?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Variants(Next Level).
   * @nullable
   */
  variantsNxtLvl?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * X-Plant Status.
   * @nullable
   */
  xPlantMaterialStatus?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Valid from.
   * @nullable
   */
  xPltStatusValidFrom?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
}

/**
 * DBomheaderforexplosionOutField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DBomheaderforexplosionOutField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DBomheaderforexplosionOut,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.alternativeItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternativeItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'alternative_item',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.altItemGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altItemGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'alt_item_group',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.altNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  altNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('alt_nxt_lvl', 'Edm.Boolean', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.assemblyIndicator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assemblyIndicator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'assembly_indicator',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.assignEffectVals} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assignEffectVals: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'assign_effect_vals',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.assyScrapItmMat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  assyScrapItmMat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'assy_scrap_itm_mat',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.asSelectionCond} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  asSelectionCond: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'as_selection_cond',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.baseQtyNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseQtyNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'base_qty_nxt_lvl',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.baseUnitNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseUnitNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'base_unit_nxt_lvl',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.baseUom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseUom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('base_uom', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.batchEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('batch_entry', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.batchMgmt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  batchMgmt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('batch_mgmt', 'Edm.Boolean', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterial} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterial: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialBaseQuant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialBaseQuant: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_base_quant',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialComponent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialComponent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_component',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialCompQuant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialCompQuant: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_comp_quant',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialItemCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialItemCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_item_category',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialItemNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialItemNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_item_number',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialItemQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialItemQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_item_quantity',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialItemUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialItemUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_item_unit',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialRoot} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialRoot: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'Bill_Of_Material_Root',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialRootVariant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialRootVariant: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_root_variant',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialVariant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialVariant: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_variant',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.billOfMaterialVariantUsage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfMaterialVariantUsage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bill_of_material_variant_usage',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bomChangeNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bomChangeNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bom_change_number',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bulkMaterial} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bulkMaterial: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'bulk_material',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMAlternativeText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMAlternativeText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_alternative_text',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMAltNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMAltNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_alt_nxt_lvl',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_category',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMCatNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMCatNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_cat_nxt_lvl',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMComponentDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMComponentDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_component_description',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMExplosionLevel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMExplosionLevel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_explosion_level',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMHdrMatlHierNode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMHdrMatlHierNode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_hdr_matl_hier_node',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMHdrRootMatlHierNode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMHdrRootMatlHierNode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'B_O_M_Hdr_Root_Matl_Hier_Node',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMHeaderBaseUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMHeaderBaseUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_header_base_unit',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMHeaderQuantityPrimary} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMHeaderQuantityPrimary: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_header_quantity_primary',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMItemDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMItemDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_item_description',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMItemIsDiscontinued} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMItemIsDiscontinued: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_item_is_discontinued',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMNoNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMNoNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_no_nxt_lvl',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMUsageNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMUsageNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_usage_nxt_lvl',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMVersion} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMVersion: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('b_o_m_version', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMVersionStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMVersionStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_version_status',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.bOMVersStatusDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bOMVersStatusDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'b_o_m_vers_status_description',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.changeNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changeNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('change_number', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.chgToEngChgNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  chgToEngChgNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'chg_to_eng_chg_number',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.class} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  class: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('class', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.classification} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  classification: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'classification',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.classType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  classType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('class_type', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.commodityCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  commodityCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'commodity_code',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.compMaintStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  compMaintStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'comp_maint_status',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.compScrapItm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  compScrapItm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'comp_scrap_itm',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.compScrapItmMat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  compScrapItmMat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'comp_scrap_itm_mat',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.configMatVar} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  configMatVar: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'config_mat_var',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.configMultiLevel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  configMultiLevel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'config_multi_level',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.confBomNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  confBomNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'conf_bom_nxt_lvl',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.costElement} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costElement: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('cost_element', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.counter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  counter: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('counter', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.coProduct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  coProduct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('co_product', 'Edm.Boolean', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.createdByUser} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createdByUser: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'created_by_user',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('currency', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.customsPreference} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  customsPreference: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'customs_preference',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.datHistNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  datHistNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'dat_hist_nxt_lvl',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.deletionIndicator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deletionIndicator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'deletion_indicator',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.deliveryTimeInDays} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryTimeInDays: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'delivery_time_in_days',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.delIndNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  delIndNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'del_Ind_nxt_lvl',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.denominator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  denominator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('denominator', 'Edm.Decimal', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.discontGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discontGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('discont_group', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.distributionKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'distribution_key',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.doc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  doc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('doc', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.documentPart} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPart: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('document_part', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.documentType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('document_type', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.documentVersion} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentVersion: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'document_version',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.docNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('doc_number', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.docReqd} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docReqd: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('doc_reqd', 'Edm.Boolean', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.docStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('doc_status', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.docType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('doc_type', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.docVersion} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docVersion: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('doc_version', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.effectiveOutDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveOutDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'effective_out_date',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.engineeringDesign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  engineeringDesign: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'engineering_design',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.exceptionBom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exceptionBom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('exception_bom', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.explosionType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  explosionType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'explosion_type',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.fixedPriceCoProd} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fixedPriceCoProd: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'fixed_price_co_prod',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.fixedQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fixedQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'fixed_quantity',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.followUpGrp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  followUpGrp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('follow_up_grp', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.followUpItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  followUpItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'follow_up_item',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.followUpProduct} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  followUpProduct: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'follow_up_product',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.formulaKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formulaKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('formula_key', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.goodsReceiptDurationInDays} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsReceiptDurationInDays: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'goods_receipt_duration_in_days',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.goodsRecipient} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  goodsRecipient: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'goods_recipient',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.headerRecordId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerRecordId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'header_record_id',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.headerValidityEndDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerValidityEndDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'header_validity_end_date',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.headerValidityStartDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerValidityStartDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'header_validity_start_date',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.hlConfiguration} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hlConfiguration: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'hl_configuration',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.individualColl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  individualColl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'individual_coll',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.internalObjNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  internalObjNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'internal_obj_no',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.intraMaterial} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  intraMaterial: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'intra_material',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.issuingPlant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  issuingPlant: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('issuing_plant', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.isBOMItemSparePart} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isBOMItemSparePart: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'is_b_o_m_item_spare_part',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.isCAD} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isCAD: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('is_c_a_d', 'Edm.Boolean', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.isMaterialProvision} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isMaterialProvision: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'is_material_provision',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.isPhantomItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isPhantomItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'is_phantom_item',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.isSoftwareComponent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isSoftwareComponent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'is_software_component',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.itemDescriptionLine2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescriptionLine2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'item_description_line_2',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.itemIdentification} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemIdentification: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'item_identification',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.itemIndex} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemIndex: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('item_index', 'Edm.Int32', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.itemNode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('item_node', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.itemSign} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemSign: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('item_sign', 'Edm.Boolean', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.lastChangedByUser} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastChangedByUser: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'last_changed_by_user',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.lastChangeDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastChangeDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'last_change_date',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.leadTimeOffset} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  leadTimeOffset: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'lead_time_offset',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.longTextLang} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  longTextLang: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'long_text_lang',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.lowLevelCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lowLevelCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'low_level_code',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.maintenanceStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maintenanceStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'maintenance_status',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.materialComponentPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  materialComponentPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'material_component_price',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.materialGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  materialGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'material_group',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.materialIsConfigurable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  materialIsConfigurable: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'material_is_configurable',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.materialName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  materialName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Material_Name', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.materialType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  materialType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('material_type', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.matPurityInPerc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  matPurityInPerc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'mat_purity_in_perc',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.movingPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  movingPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('moving_price', 'Edm.Decimal', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.multipleSel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  multipleSel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('multiple_sel', 'Edm.Boolean', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.mRPType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mRPType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('m_r_p_type', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.netScrapIndicator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  netScrapIndicator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'net_scrap_indicator',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.noCuInstances} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noCuInstances: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'no_cu_instances',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.noOfSheets} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noOfSheets: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('no_of_sheets', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.noVarSizeItems} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  noVarSizeItems: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'no_var_size_items',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.numerator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numerator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('numerator', 'Edm.Decimal', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.objectDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'object_description',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.objectType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objectType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('object_type', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.objDepAssgtNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  objDepAssgtNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'obj_dep_assgt_no',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.operationScrapPerc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  operationScrapPerc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'operation_scrap_perc',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.operLtoUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  operLtoUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('oper_lto_unit', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.operLtOffset} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  operLtOffset: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'oper_lt_offset',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.orgArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  orgArea: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('org_area', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.pageFormat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pageFormat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('page_format', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.pageNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pageNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('page_number', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.path} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  path: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('path', 'Edm.Decimal', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.pathPredecessor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pathPredecessor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'path_predecessor',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.plant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plant: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('plant', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.plantName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plantName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('plantName', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.plantMaintenance} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plantMaintenance: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'plant_maintenance',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.plantSpMatlStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  plantSpMatlStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'plant_sp_matl_status',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.pltSpStatusValidFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pltSpStatusValidFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'plt_sp_status_valid_from',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.priceControl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceControl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('price_control', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.priceUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priceUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('price_unit', 'Edm.Decimal', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.priority} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('priority', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.procuredExternally} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  procuredExternally: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'procured_externally',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.prodnSupplyArea} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prodnSupplyArea: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'prodn_supply_area',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.productionRelevant} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  productionRelevant: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'production_relevant',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.productionVersion} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  productionVersion: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'production_version',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.prodOrderIssueLocation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  prodOrderIssueLocation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'prod_order_issue_location',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.profitCenter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('profit_center', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.purchasingGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchasingGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'purchasing_group',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.purchasingOrganisation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  purchasingOrganisation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'purchasing_organisation',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.qtyVarSizeItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  qtyVarSizeItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'qty_var_size_item',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.recordCreationDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recordCreationDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'record_creation_date',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.recurisve} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recurisve: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('recurisve', 'Edm.Boolean', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.recursAllowed} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  recursAllowed: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'recurs_allowed',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.referencePoint} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  referencePoint: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'reference_point',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.relevancyToCosting} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relevancyToCosting: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'relevancy_to_costing',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.relevantToSales} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relevantToSales: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'relevant_to_sales',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.requiredComponent} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requiredComponent: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'required_component',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.requirementSegment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  requirementSegment: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'requirement_segment',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.revisionLevel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  revisionLevel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'revision_level',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.scrapQtyBun} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  scrapQtyBun: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'scrap_qty_bun',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.serialNoProfile} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialNoProfile: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'serial_no_profile',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.size1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  size1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('size1', 'Edm.Decimal', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.size2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  size2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('size2', 'Edm.Decimal', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.size3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  size3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('size3', 'Edm.Decimal', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.sizeUnit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sizeUnit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('size_unit', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.sortString} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sortString: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('sort_string', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.specialProcurementType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialProcurementType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'special_procurement_type',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.specialProcTypItm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialProcTypItm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'special_proc_typ_itm',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.specialProcTypMastr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specialProcTypMastr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'special_proc_typ_mastr',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.specProcCosting} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  specProcCosting: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'spec_proc_costing',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.standardPrice} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  standardPrice: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'standard_price',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.statusText} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusText: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('status_text', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.stockSegment} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockSegment: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('stock_segment', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.storageLocation} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  storageLocation: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'storage_location',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.strategy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  strategy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('strategy', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.subItemIndicator} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subItemIndicator: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'sub_item_indicator',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.supplier} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  supplier: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('supplier', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.tableRow} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tableRow: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('table_row', 'Edm.Int32', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.techStatusFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  techStatusFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'tech_status_from',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.testHistNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  testHistNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'test_hist_nxt_lvl',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.totalsRecordId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalsRecordId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'totals_record_id',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.unitOfMeasure} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitOfMeasure: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'unit_of_measure',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.unloadingPoint} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unloadingPoint: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'unloading_point',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.uomUsage} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uomUsage: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('uom_usage', 'Edm.String', true);
  /**
   * Representation of the {@link DBomheaderforexplosionOut.usageProbability} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  usageProbability: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Decimal',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'usage_probability',
    'Edm.Decimal',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.validityEndDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validityEndDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'validity_end_date',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.validityStartDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  validityStartDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'validity_start_date',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.valuationCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  valuationCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'valuation_category',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.variantsNxtLvl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  variantsNxtLvl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'variants_nxt_lvl',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.xPlantMaterialStatus} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  xPlantMaterialStatus: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'x_plant_material_status',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link DBomheaderforexplosionOut.xPltStatusValidFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  xPltStatusValidFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'x_plt_status_valid_from',
    'Edm.DateTime',
    true
  );

  /**
   * Creates an instance of DBomheaderforexplosionOutField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      DBomheaderforexplosionOut,
      fieldOptions
    );
  }
}

export namespace DBomheaderforexplosionOut {
  /**
   * Metadata information on all properties of the `DBomheaderforexplosionOut` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DBomheaderforexplosionOut>[] =
    [
      {
        originalName: 'alternative_item',
        name: 'alternativeItem',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'alt_item_group',
        name: 'altItemGroup',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'alt_nxt_lvl',
        name: 'altNxtLvl',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'assembly_indicator',
        name: 'assemblyIndicator',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'assign_effect_vals',
        name: 'assignEffectVals',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'assy_scrap_itm_mat',
        name: 'assyScrapItmMat',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'as_selection_cond',
        name: 'asSelectionCond',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'base_qty_nxt_lvl',
        name: 'baseQtyNxtLvl',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'base_unit_nxt_lvl',
        name: 'baseUnitNxtLvl',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'base_uom',
        name: 'baseUom',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'batch_entry',
        name: 'batchEntry',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'batch_mgmt',
        name: 'batchMgmt',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'bill_of_material',
        name: 'billOfMaterial',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_base_quant',
        name: 'billOfMaterialBaseQuant',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_component',
        name: 'billOfMaterialComponent',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_comp_quant',
        name: 'billOfMaterialCompQuant',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_item_category',
        name: 'billOfMaterialItemCategory',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_item_number',
        name: 'billOfMaterialItemNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_item_quantity',
        name: 'billOfMaterialItemQuantity',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_item_unit',
        name: 'billOfMaterialItemUnit',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Bill_Of_Material_Root',
        name: 'billOfMaterialRoot',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_root_variant',
        name: 'billOfMaterialRootVariant',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_variant',
        name: 'billOfMaterialVariant',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bill_of_material_variant_usage',
        name: 'billOfMaterialVariantUsage',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bom_change_number',
        name: 'bomChangeNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'bulk_material',
        name: 'bulkMaterial',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'b_o_m_alternative_text',
        name: 'bOMAlternativeText',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_alt_nxt_lvl',
        name: 'bOMAltNxtLvl',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_category',
        name: 'bOMCategory',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_cat_nxt_lvl',
        name: 'bOMCatNxtLvl',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_component_description',
        name: 'bOMComponentDescription',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_explosion_level',
        name: 'bOMExplosionLevel',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'b_o_m_hdr_matl_hier_node',
        name: 'bOMHdrMatlHierNode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'B_O_M_Hdr_Root_Matl_Hier_Node',
        name: 'bOMHdrRootMatlHierNode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_header_base_unit',
        name: 'bOMHeaderBaseUnit',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_header_quantity_primary',
        name: 'bOMHeaderQuantityPrimary',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'b_o_m_item_description',
        name: 'bOMItemDescription',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_item_is_discontinued',
        name: 'bOMItemIsDiscontinued',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_no_nxt_lvl',
        name: 'bOMNoNxtLvl',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_usage_nxt_lvl',
        name: 'bOMUsageNxtLvl',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_version',
        name: 'bOMVersion',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_version_status',
        name: 'bOMVersionStatus',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'b_o_m_vers_status_description',
        name: 'bOMVersStatusDescription',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'change_number',
        name: 'changeNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'chg_to_eng_chg_number',
        name: 'chgToEngChgNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'class',
        name: 'class',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'classification',
        name: 'classification',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'class_type',
        name: 'classType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'commodity_code',
        name: 'commodityCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'comp_maint_status',
        name: 'compMaintStatus',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'comp_scrap_itm',
        name: 'compScrapItm',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'comp_scrap_itm_mat',
        name: 'compScrapItmMat',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'config_mat_var',
        name: 'configMatVar',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'config_multi_level',
        name: 'configMultiLevel',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'conf_bom_nxt_lvl',
        name: 'confBomNxtLvl',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'cost_element',
        name: 'costElement',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'counter',
        name: 'counter',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'co_product',
        name: 'coProduct',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'created_by_user',
        name: 'createdByUser',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'currency',
        name: 'currency',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'customs_preference',
        name: 'customsPreference',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'dat_hist_nxt_lvl',
        name: 'datHistNxtLvl',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'deletion_indicator',
        name: 'deletionIndicator',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'delivery_time_in_days',
        name: 'deliveryTimeInDays',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'del_Ind_nxt_lvl',
        name: 'delIndNxtLvl',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'denominator',
        name: 'denominator',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'discont_group',
        name: 'discontGroup',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'distribution_key',
        name: 'distributionKey',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'doc',
        name: 'doc',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'document_part',
        name: 'documentPart',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'document_type',
        name: 'documentType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'document_version',
        name: 'documentVersion',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'doc_number',
        name: 'docNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'doc_reqd',
        name: 'docReqd',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'doc_status',
        name: 'docStatus',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'doc_type',
        name: 'docType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'doc_version',
        name: 'docVersion',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'effective_out_date',
        name: 'effectiveOutDate',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'engineering_design',
        name: 'engineeringDesign',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'exception_bom',
        name: 'exceptionBom',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'explosion_type',
        name: 'explosionType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'fixed_price_co_prod',
        name: 'fixedPriceCoProd',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'fixed_quantity',
        name: 'fixedQuantity',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'follow_up_grp',
        name: 'followUpGrp',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'follow_up_item',
        name: 'followUpItem',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'follow_up_product',
        name: 'followUpProduct',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'formula_key',
        name: 'formulaKey',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'goods_receipt_duration_in_days',
        name: 'goodsReceiptDurationInDays',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'goods_recipient',
        name: 'goodsRecipient',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'header_record_id',
        name: 'headerRecordId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'header_validity_end_date',
        name: 'headerValidityEndDate',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'header_validity_start_date',
        name: 'headerValidityStartDate',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'hl_configuration',
        name: 'hlConfiguration',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'individual_coll',
        name: 'individualColl',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'internal_obj_no',
        name: 'internalObjNo',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'intra_material',
        name: 'intraMaterial',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'issuing_plant',
        name: 'issuingPlant',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'is_b_o_m_item_spare_part',
        name: 'isBOMItemSparePart',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'is_c_a_d',
        name: 'isCAD',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'is_material_provision',
        name: 'isMaterialProvision',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'is_phantom_item',
        name: 'isPhantomItem',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'is_software_component',
        name: 'isSoftwareComponent',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'item_description_line_2',
        name: 'itemDescriptionLine2',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'item_identification',
        name: 'itemIdentification',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'item_index',
        name: 'itemIndex',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'item_node',
        name: 'itemNode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'item_sign',
        name: 'itemSign',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'last_changed_by_user',
        name: 'lastChangedByUser',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'last_change_date',
        name: 'lastChangeDate',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'lead_time_offset',
        name: 'leadTimeOffset',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'long_text_lang',
        name: 'longTextLang',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'low_level_code',
        name: 'lowLevelCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'maintenance_status',
        name: 'maintenanceStatus',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'material_component_price',
        name: 'materialComponentPrice',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'material_group',
        name: 'materialGroup',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'material_is_configurable',
        name: 'materialIsConfigurable',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'Material_Name',
        name: 'materialName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'material_type',
        name: 'materialType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'mat_purity_in_perc',
        name: 'matPurityInPerc',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'moving_price',
        name: 'movingPrice',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'multiple_sel',
        name: 'multipleSel',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'm_r_p_type',
        name: 'mRPType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'net_scrap_indicator',
        name: 'netScrapIndicator',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'no_cu_instances',
        name: 'noCuInstances',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'no_of_sheets',
        name: 'noOfSheets',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'no_var_size_items',
        name: 'noVarSizeItems',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'numerator',
        name: 'numerator',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'object_description',
        name: 'objectDescription',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'object_type',
        name: 'objectType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'obj_dep_assgt_no',
        name: 'objDepAssgtNo',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'operation_scrap_perc',
        name: 'operationScrapPerc',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'oper_lto_unit',
        name: 'operLtoUnit',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'oper_lt_offset',
        name: 'operLtOffset',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'org_area',
        name: 'orgArea',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'page_format',
        name: 'pageFormat',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'page_number',
        name: 'pageNumber',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'path',
        name: 'path',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'path_predecessor',
        name: 'pathPredecessor',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'plant',
        name: 'plant',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'plantName',
        name: 'plantName',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'plant_maintenance',
        name: 'plantMaintenance',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'plant_sp_matl_status',
        name: 'plantSpMatlStatus',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'plt_sp_status_valid_from',
        name: 'pltSpStatusValidFrom',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'price_control',
        name: 'priceControl',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'price_unit',
        name: 'priceUnit',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'priority',
        name: 'priority',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'procured_externally',
        name: 'procuredExternally',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'prodn_supply_area',
        name: 'prodnSupplyArea',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'production_relevant',
        name: 'productionRelevant',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'production_version',
        name: 'productionVersion',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'prod_order_issue_location',
        name: 'prodOrderIssueLocation',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'profit_center',
        name: 'profitCenter',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'purchasing_group',
        name: 'purchasingGroup',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'purchasing_organisation',
        name: 'purchasingOrganisation',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'qty_var_size_item',
        name: 'qtyVarSizeItem',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'record_creation_date',
        name: 'recordCreationDate',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'recurisve',
        name: 'recurisve',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'recurs_allowed',
        name: 'recursAllowed',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'reference_point',
        name: 'referencePoint',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'relevancy_to_costing',
        name: 'relevancyToCosting',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'relevant_to_sales',
        name: 'relevantToSales',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'required_component',
        name: 'requiredComponent',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'requirement_segment',
        name: 'requirementSegment',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'revision_level',
        name: 'revisionLevel',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'scrap_qty_bun',
        name: 'scrapQtyBun',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'serial_no_profile',
        name: 'serialNoProfile',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'size1',
        name: 'size1',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'size2',
        name: 'size2',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'size3',
        name: 'size3',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'size_unit',
        name: 'sizeUnit',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'sort_string',
        name: 'sortString',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'special_procurement_type',
        name: 'specialProcurementType',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'special_proc_typ_itm',
        name: 'specialProcTypItm',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'special_proc_typ_mastr',
        name: 'specialProcTypMastr',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'spec_proc_costing',
        name: 'specProcCosting',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'standard_price',
        name: 'standardPrice',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'status_text',
        name: 'statusText',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'stock_segment',
        name: 'stockSegment',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'storage_location',
        name: 'storageLocation',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'strategy',
        name: 'strategy',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'sub_item_indicator',
        name: 'subItemIndicator',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'supplier',
        name: 'supplier',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'table_row',
        name: 'tableRow',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'tech_status_from',
        name: 'techStatusFrom',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'test_hist_nxt_lvl',
        name: 'testHistNxtLvl',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'totals_record_id',
        name: 'totalsRecordId',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'unit_of_measure',
        name: 'unitOfMeasure',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'unloading_point',
        name: 'unloadingPoint',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'uom_usage',
        name: 'uomUsage',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'usage_probability',
        name: 'usageProbability',
        type: 'Edm.Decimal',
        isCollection: false
      },
      {
        originalName: 'validity_end_date',
        name: 'validityEndDate',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'validity_start_date',
        name: 'validityStartDate',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'valuation_category',
        name: 'valuationCategory',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'variants_nxt_lvl',
        name: 'variantsNxtLvl',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'x_plant_material_status',
        name: 'xPlantMaterialStatus',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'x_plt_status_valid_from',
        name: 'xPltStatusValidFrom',
        type: 'Edm.DateTime',
        isCollection: false
      }
    ];
}
