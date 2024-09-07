/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { BillOfMaterialUsage } from './BillOfMaterialUsage';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialUsage} entity.
 */
export class BillOfMaterialUsageRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialUsage<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialUsage` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialUsage` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialUsage<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialUsage<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialUsage` entity based on its keys.
   * @param billOfMaterialVariantUsage Key property. See {@link BillOfMaterialUsage.billOfMaterialVariantUsage}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialUsage` entity based on its keys.
   */
  getByKey(
    billOfMaterialVariantUsage: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillOfMaterialUsage<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialUsage<T>, T>(
      this.entityApi,
      { BillOfMaterialVariantUsage: billOfMaterialVariantUsage }
    );
  }
}
