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
import { BomItemCategoryText } from './BomItemCategoryText';

/**
 * Request builder class for operations supported on the {@link BomItemCategoryText} entity.
 */
export class BomItemCategoryTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BomItemCategoryText<T>, T> {
  /**
   * Returns a request builder for querying all `BomItemCategoryText` entities.
   * @returns A request builder for creating requests to retrieve all `BomItemCategoryText` entities.
   */
  getAll(): GetAllRequestBuilder<BomItemCategoryText<T>, T> {
    return new GetAllRequestBuilder<BomItemCategoryText<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `BomItemCategoryText` entity based on its keys.
   * @param language Key property. See {@link BomItemCategoryText.language}.
   * @param billOfMaterialItemCategory Key property. See {@link BomItemCategoryText.billOfMaterialItemCategory}.
   * @returns A request builder for creating requests to retrieve one `BomItemCategoryText` entity based on its keys.
   */
  getByKey(
    language: DeserializedType<T, 'Edm.String'>,
    billOfMaterialItemCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BomItemCategoryText<T>, T> {
    return new GetByKeyRequestBuilder<BomItemCategoryText<T>, T>(
      this.entityApi,
      {
        Language: language,
        BillOfMaterialItemCategory: billOfMaterialItemCategory
      }
    );
  }
}
