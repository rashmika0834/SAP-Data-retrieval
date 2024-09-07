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
import { BillOfMaterialUsageText } from './BillOfMaterialUsageText';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialUsageText} entity.
 */
export class BillOfMaterialUsageTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialUsageText<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialUsageText` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialUsageText` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialUsageText<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialUsageText<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialUsageText` entity based on its keys.
   * @param language Key property. See {@link BillOfMaterialUsageText.language}.
   * @param billOfMaterialVariantUsage Key property. See {@link BillOfMaterialUsageText.billOfMaterialVariantUsage}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialUsageText` entity based on its keys.
   */
  getByKey(
    language: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVariantUsage: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BillOfMaterialUsageText<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialUsageText<T>, T>(
      this.entityApi,
      {
        Language: language,
        BillOfMaterialVariantUsage: billOfMaterialVariantUsage
      }
    );
  }
}
