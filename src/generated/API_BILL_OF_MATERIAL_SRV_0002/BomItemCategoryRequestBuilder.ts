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
import { BomItemCategory } from './BomItemCategory';

/**
 * Request builder class for operations supported on the {@link BomItemCategory} entity.
 */
export class BomItemCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BomItemCategory<T>, T> {
  /**
   * Returns a request builder for querying all `BomItemCategory` entities.
   * @returns A request builder for creating requests to retrieve all `BomItemCategory` entities.
   */
  getAll(): GetAllRequestBuilder<BomItemCategory<T>, T> {
    return new GetAllRequestBuilder<BomItemCategory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `BomItemCategory` entity based on its keys.
   * @param billOfMaterialItemCategory Key property. See {@link BomItemCategory.billOfMaterialItemCategory}.
   * @returns A request builder for creating requests to retrieve one `BomItemCategory` entity based on its keys.
   */
  getByKey(
    billOfMaterialItemCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BomItemCategory<T>, T> {
    return new GetByKeyRequestBuilder<BomItemCategory<T>, T>(this.entityApi, {
      BillOfMaterialItemCategory: billOfMaterialItemCategory
    });
  }
}
