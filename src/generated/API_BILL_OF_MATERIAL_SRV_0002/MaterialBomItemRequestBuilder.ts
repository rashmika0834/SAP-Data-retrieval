/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { MaterialBomItem } from './MaterialBomItem';

/**
 * Request builder class for operations supported on the {@link MaterialBomItem} entity.
 */
export class MaterialBomItemRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialBomItem<T>, T> {
  /**
   * Returns a request builder for querying all `MaterialBomItem` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialBomItem` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialBomItem<T>, T> {
    return new GetAllRequestBuilder<MaterialBomItem<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaterialBomItem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialBomItem`.
   */
  create(
    entity: MaterialBomItem<T>
  ): CreateRequestBuilder<MaterialBomItem<T>, T> {
    return new CreateRequestBuilder<MaterialBomItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaterialBomItem` entity based on its keys.
   * @param billOfMaterial Key property. See {@link MaterialBomItem.billOfMaterial}.
   * @param billOfMaterialCategory Key property. See {@link MaterialBomItem.billOfMaterialCategory}.
   * @param billOfMaterialVariant Key property. See {@link MaterialBomItem.billOfMaterialVariant}.
   * @param billOfMaterialVersion Key property. See {@link MaterialBomItem.billOfMaterialVersion}.
   * @param billOfMaterialItemNodeNumber Key property. See {@link MaterialBomItem.billOfMaterialItemNodeNumber}.
   * @param headerChangeDocument Key property. See {@link MaterialBomItem.headerChangeDocument}.
   * @param material Key property. See {@link MaterialBomItem.material}.
   * @param plant Key property. See {@link MaterialBomItem.plant}.
   * @returns A request builder for creating requests to retrieve one `MaterialBomItem` entity based on its keys.
   */
  getByKey(
    billOfMaterial: DeserializedType<T, 'Edm.String'>,
    billOfMaterialCategory: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVariant: DeserializedType<T, 'Edm.String'>,
    billOfMaterialVersion: DeserializedType<T, 'Edm.String'>,
    billOfMaterialItemNodeNumber: DeserializedType<T, 'Edm.String'>,
    headerChangeDocument: DeserializedType<T, 'Edm.String'>,
    material: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MaterialBomItem<T>, T> {
    return new GetByKeyRequestBuilder<MaterialBomItem<T>, T>(this.entityApi, {
      BillOfMaterial: billOfMaterial,
      BillOfMaterialCategory: billOfMaterialCategory,
      BillOfMaterialVariant: billOfMaterialVariant,
      BillOfMaterialVersion: billOfMaterialVersion,
      BillOfMaterialItemNodeNumber: billOfMaterialItemNodeNumber,
      HeaderChangeDocument: headerChangeDocument,
      Material: material,
      Plant: plant
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialBomItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialBomItem`.
   */
  update(
    entity: MaterialBomItem<T>
  ): UpdateRequestBuilder<MaterialBomItem<T>, T> {
    return new UpdateRequestBuilder<MaterialBomItem<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialBomItem`.
   * @param billOfMaterial Key property. See {@link MaterialBomItem.billOfMaterial}.
   * @param billOfMaterialCategory Key property. See {@link MaterialBomItem.billOfMaterialCategory}.
   * @param billOfMaterialVariant Key property. See {@link MaterialBomItem.billOfMaterialVariant}.
   * @param billOfMaterialVersion Key property. See {@link MaterialBomItem.billOfMaterialVersion}.
   * @param billOfMaterialItemNodeNumber Key property. See {@link MaterialBomItem.billOfMaterialItemNodeNumber}.
   * @param headerChangeDocument Key property. See {@link MaterialBomItem.headerChangeDocument}.
   * @param material Key property. See {@link MaterialBomItem.material}.
   * @param plant Key property. See {@link MaterialBomItem.plant}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialBomItem`.
   */
  delete(
    billOfMaterial: string,
    billOfMaterialCategory: string,
    billOfMaterialVariant: string,
    billOfMaterialVersion: string,
    billOfMaterialItemNodeNumber: string,
    headerChangeDocument: string,
    material: string,
    plant: string
  ): DeleteRequestBuilder<MaterialBomItem<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialBomItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialBomItem` by taking the entity as a parameter.
   */
  delete(
    entity: MaterialBomItem<T>
  ): DeleteRequestBuilder<MaterialBomItem<T>, T>;
  delete(
    billOfMaterialOrEntity: any,
    billOfMaterialCategory?: string,
    billOfMaterialVariant?: string,
    billOfMaterialVersion?: string,
    billOfMaterialItemNodeNumber?: string,
    headerChangeDocument?: string,
    material?: string,
    plant?: string
  ): DeleteRequestBuilder<MaterialBomItem<T>, T> {
    return new DeleteRequestBuilder<MaterialBomItem<T>, T>(
      this.entityApi,
      billOfMaterialOrEntity instanceof MaterialBomItem
        ? billOfMaterialOrEntity
        : {
            BillOfMaterial: billOfMaterialOrEntity!,
            BillOfMaterialCategory: billOfMaterialCategory!,
            BillOfMaterialVariant: billOfMaterialVariant!,
            BillOfMaterialVersion: billOfMaterialVersion!,
            BillOfMaterialItemNodeNumber: billOfMaterialItemNodeNumber!,
            HeaderChangeDocument: headerChangeDocument!,
            Material: material!,
            Plant: plant!
          }
    );
  }
}
