/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialBomItemApi } from './MaterialBomItemApi';
import { MaterialBomSubItemApi } from './MaterialBomSubItemApi';
import { BillOfMaterialUsageApi } from './BillOfMaterialUsageApi';
import { BillOfMaterialUsageTextApi } from './BillOfMaterialUsageTextApi';
import { MaterialBomApi } from './MaterialBomApi';
import { BomItemCategoryApi } from './BomItemCategoryApi';
import { BomItemCategoryTextApi } from './BomItemCategoryTextApi';
import { MbomItmObjDpnAssignmentApi } from './MbomItmObjDpnAssignmentApi';
import {
  convertItem,
  deleteBomItemWithEcn,
  updateBomItemWithEcn,
  deleteBomHeaderWithEcn,
  explodeBom,
  releaseVersionBom,
  ConvertItemParameters,
  DeleteBomItemWithEcnParameters,
  UpdateBomItemWithEcnParameters,
  DeleteBomHeaderWithEcnParameters,
  ExplodeBomParameters,
  ReleaseVersionBomParameters
} from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function apiBillOfMaterialSrv0002<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): ApiBillOfMaterialSrv0002<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new ApiBillOfMaterialSrv0002(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class ApiBillOfMaterialSrv0002<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get materialBomItemApi(): MaterialBomItemApi<DeSerializersT> {
    const api = this.initApi('materialBomItemApi', MaterialBomItemApi);
    const linkedApis = [
      this.initApi('bomItemCategoryApi', BomItemCategoryApi),
      this.initApi('mbomItmObjDpnAssignmentApi', MbomItmObjDpnAssignmentApi),
      this.initApi('materialBomSubItemApi', MaterialBomSubItemApi),
      this.initApi('materialBomApi', MaterialBomApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get materialBomSubItemApi(): MaterialBomSubItemApi<DeSerializersT> {
    const api = this.initApi('materialBomSubItemApi', MaterialBomSubItemApi);
    const linkedApis = [
      this.initApi('materialBomItemApi', MaterialBomItemApi),
      this.initApi('materialBomApi', MaterialBomApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get billOfMaterialUsageApi(): BillOfMaterialUsageApi<DeSerializersT> {
    const api = this.initApi('billOfMaterialUsageApi', BillOfMaterialUsageApi);
    const linkedApis = [
      this.initApi('billOfMaterialUsageTextApi', BillOfMaterialUsageTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get billOfMaterialUsageTextApi(): BillOfMaterialUsageTextApi<DeSerializersT> {
    return this.initApi(
      'billOfMaterialUsageTextApi',
      BillOfMaterialUsageTextApi
    );
  }

  get materialBomApi(): MaterialBomApi<DeSerializersT> {
    const api = this.initApi('materialBomApi', MaterialBomApi);
    const linkedApis = [
      this.initApi('materialBomItemApi', MaterialBomItemApi),
      this.initApi('billOfMaterialUsageApi', BillOfMaterialUsageApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get bomItemCategoryApi(): BomItemCategoryApi<DeSerializersT> {
    const api = this.initApi('bomItemCategoryApi', BomItemCategoryApi);
    const linkedApis = [
      this.initApi('bomItemCategoryTextApi', BomItemCategoryTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get bomItemCategoryTextApi(): BomItemCategoryTextApi<DeSerializersT> {
    return this.initApi('bomItemCategoryTextApi', BomItemCategoryTextApi);
  }

  get mbomItmObjDpnAssignmentApi(): MbomItmObjDpnAssignmentApi<DeSerializersT> {
    const api = this.initApi(
      'mbomItmObjDpnAssignmentApi',
      MbomItmObjDpnAssignmentApi
    );
    const linkedApis = [
      this.initApi('materialBomItemApi', MaterialBomItemApi),
      this.initApi('materialBomApi', MaterialBomApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get operations() {
    return {
      convertItem: (parameter: ConvertItemParameters<DeSerializersT>) =>
        convertItem(parameter, this.deSerializers),
      deleteBomItemWithEcn: (
        parameter: DeleteBomItemWithEcnParameters<DeSerializersT>
      ) => deleteBomItemWithEcn(parameter, this.deSerializers),
      updateBomItemWithEcn: (
        parameter: UpdateBomItemWithEcnParameters<DeSerializersT>
      ) => updateBomItemWithEcn(parameter, this.deSerializers),
      deleteBomHeaderWithEcn: (
        parameter: DeleteBomHeaderWithEcnParameters<DeSerializersT>
      ) => deleteBomHeaderWithEcn(parameter, this.deSerializers),
      explodeBom: (parameter: ExplodeBomParameters<DeSerializersT>) =>
        explodeBom(parameter, this.deSerializers),
      releaseVersionBom: (
        parameter: ReleaseVersionBomParameters<DeSerializersT>
      ) => releaseVersionBom(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
