/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  MaterialBomItem,
  MaterialBomSubItem,
  BillOfMaterialUsage,
  BillOfMaterialUsageText,
  MaterialBom,
  BomItemCategory,
  BomItemCategoryText,
  MbomItmObjDpnAssignment,
  ConvertItemParameters,
  DeleteBomItemWithEcnParameters,
  UpdateBomItemWithEcnParameters,
  DeleteBomHeaderWithEcnParameters,
  ExplodeBomParameters,
  ReleaseVersionBomParameters,
  DBomdelchangenooutparameter,
  DBomheaderforexplosionOut
} from './index';

/**
 * Batch builder for operations supported on the Api Bill Of Material Srv 0002.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultApiBillOfMaterialSrv0002Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Api Bill Of Material Srv 0002.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>
    | Array<WriteApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteApiBillOfMaterialSrv0002RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultApiBillOfMaterialSrv0002Path =
  '/sap/opu/odata/sap/API_BILL_OF_MATERIAL_SRV;v=0002';
export type ReadApiBillOfMaterialSrv0002RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<MaterialBomItem<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<MaterialBomSubItem<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BillOfMaterialUsage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      BillOfMaterialUsageText<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MaterialBom<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BomItemCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BomItemCategoryText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MaterialBomItem<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<MaterialBomSubItem<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BillOfMaterialUsage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BillOfMaterialUsageText<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MaterialBom<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BomItemCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BomItemCategoryText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ExplodeBomParameters<DeSerializersT>,
      DBomheaderforexplosionOut[]
    >;
export type WriteApiBillOfMaterialSrv0002RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<MaterialBomItem<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaterialBomItem<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaterialBomItem<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<MaterialBomSubItem<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaterialBomSubItem<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaterialBomSubItem<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BillOfMaterialUsage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BillOfMaterialUsage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BillOfMaterialUsage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      BillOfMaterialUsageText<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BillOfMaterialUsageText<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BillOfMaterialUsageText<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MaterialBom<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaterialBom<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaterialBom<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BomItemCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BomItemCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BomItemCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BomItemCategoryText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BomItemCategoryText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BomItemCategoryText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MbomItmObjDpnAssignment<DeSerializersT>,
      DeSerializersT
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ConvertItemParameters<DeSerializersT>,
      MaterialBomItem
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeleteBomItemWithEcnParameters<DeSerializersT>,
      DBomdelchangenooutparameter
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UpdateBomItemWithEcnParameters<DeSerializersT>,
      MaterialBomItem
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeleteBomHeaderWithEcnParameters<DeSerializersT>,
      DBomdelchangenooutparameter
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ReleaseVersionBomParameters<DeSerializersT>,
      MaterialBom
    >;
